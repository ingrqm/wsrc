import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Document, Page } from 'react-pdf';
import { useNavigate } from 'react-router-dom';
import {
  BookOutlined,
  LeftOutlined,
  LoadingOutlined,
  ReadOutlined,
  RightOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import { Button, Modal, Spin } from 'antd';
import { fetchStartTest, StartTestProps, StartTestRet } from 'api';
import books from 'assets/books';
import { competitionAtom, skipCompetitionAtom } from 'atoms/competition';
import { MutationKey, QueryKey } from 'enums';
import { useMutationWithError } from 'hooks';
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';
import { useRecoilState, useRecoilValue } from 'recoil';
import { appUrls } from 'urls';
import { getAgeEnum } from 'utils/age';
import { Main, Navigation, Options, PagePagination, PageWrapper, StyledCard } from './reading.styled';

const Reading = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [competition, setCompetition] = useRecoilState(competitionAtom);
  const skipCompetition = useRecoilValue(skipCompetitionAtom);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [scale, setScale] = useState(1);
  const [pageWidth, setPageWidth] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);
  const [isBookOpen, setIsBookOpen] = useState(false);

  const book = useMemo(
    () =>
      competition.languageChampionship &&
      competition.age &&
      books[competition.languageChampionship][getAgeEnum(competition.age)],
    [competition]
  );

  const pageRef = useCallback((node) => {
    if (node !== null) {
      if (!node.children[0].classList.contains('react-pdf__message--loading')) {
        setPageWidth(node.children[0].offsetWidth);
        setPageHeight(node.children[0].offsetHeight);
      }
    }

    return node;
  }, []);

  const startTest = useMutationWithError<StartTestRet, Error, StartTestProps>(fetchStartTest, {
    mutationKey: MutationKey.startTest,
    invalidateQueryKey: QueryKey.resultDetails,
    loadingMessage: t('form.startTest.messages.loading'),
    errorMessage: t('form.startTest.messages.error'),
    successMessage: t('form.startTest.messages.success'),
    onSuccess: (response) => {
      setCompetition(response);
      navigate(appUrls.championship.test);
    },
  });

  const handleStartTest = useCallback(() => {
    startTest.mutate({});
  }, []);

  const handlePreviousChapter = useCallback(() => {
    if (book) {
      setPage(
        [...book.chapters].sort((a: number, b: number) => b - a).find((newPage: number) => newPage < page) as number
      );
    }
  }, [book, page]);

  const handleZoomOut = useCallback(() => {
    setScale(scale - 0.1);
  }, [scale]);

  const handleToggleBook = useCallback(() => {
    if (page === 1 && !isBookOpen) {
      setPage(2);
    }
    if (page === 2 && isBookOpen) {
      setPage(1);
    }

    setIsBookOpen(!isBookOpen);
  }, [isBookOpen, page]);

  const handleFirstPage = useCallback(() => {
    if (isBookOpen) {
      setPage(2);
    } else {
      setPage(1);
    }
  }, [isBookOpen]);

  const handleLastPage = useCallback(() => {
    setPage(pages);
  }, [pages]);

  const handleZoomIn = useCallback(() => {
    setScale(scale + 0.1);
  }, [scale]);

  const handleNextChapter = useCallback(() => {
    if (book) {
      setPage(
        [...book.chapters].sort((a: number, b: number) => a - b).find((newPage: number) => newPage > page) as number
      );
    }
  }, [book, page]);

  const handlePreviousPage = useCallback(() => {
    setPage(page - 1);
  }, [page]);

  const handleNextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const handleDocumentLoadSuccess = ({ numPages }: PDFDocumentProxy) => {
    setPages(numPages);
  };

  const handleConfirm = useCallback(async () => {
    Modal.confirm({
      title: t('championship.reading.modal.confirm.title'),
      content: t('championship.reading.modal.confirm.content'),
      okText: t('championship.reading.modal.confirm.okText'),
      cancelText: t('championship.reading.modal.confirm.cancelText'),
      onOk: handleStartTest,
    });
  }, []);

  const isDisabledPreviousChapter = useMemo(() => (book ? book.chapters[0] >= page : true), [book, page]);
  const isDisabledNextChapter = useMemo(
    () => (book ? book.chapters[book.chapters.length - 1] <= page : true),
    [book, page]
  );

  useEffect(() => {
    if (skipCompetition.skipReading) {
      if (competition.startTest) {
        navigate(appUrls.championship.test);
      } else {
        handleStartTest();
      }
    }
  }, [skipCompetition.skipReading]);

  return (
    <>
      <Navigation>
        <Button className='previous-chapter' onClick={handlePreviousChapter} disabled={isDisabledPreviousChapter}>
          <LeftOutlined /> {t('championship.reading.navigation.chapter')}
        </Button>
        <Options>
          <Button className='first-page' onClick={handleFirstPage}>
            {t('championship.reading.navigation.firstPage')}
          </Button>
          <Button className='zoom-out' icon={<ZoomOutOutlined />} onClick={handleZoomOut} />
          <Button
            className='toggle-book'
            icon={isBookOpen ? <BookOutlined /> : <ReadOutlined />}
            onClick={handleToggleBook}
          />
          <Button className='zoom-in' icon={<ZoomInOutlined />} onClick={handleZoomIn} />
          <Button className='last-page' onClick={handleLastPage}>
            {t('championship.reading.navigation.lastPage')}
          </Button>
        </Options>
        <Button className='next-chapter' onClick={handleNextChapter} disabled={isDisabledNextChapter}>
          {t('championship.reading.navigation.chapter')} <RightOutlined />
        </Button>
        <Button className='start-test' type='primary' onClick={handleConfirm}>
          {t('championship.reading.navigation.startTest')} <RightOutlined />
        </Button>
        <Button className='previous-page' onClick={handlePreviousPage} disabled={page <= 1}>
          <LeftOutlined /> {t('championship.reading.navigation.page')}
        </Button>
        <Button className='next-page' onClick={handleNextPage} disabled={page >= pages}>
          {t('championship.reading.navigation.page')} <RightOutlined />
        </Button>
      </Navigation>
      <Main>
        {book && (
          <Document file={book.file} onLoadSuccess={handleDocumentLoadSuccess}>
            <PageWrapper>
              {isBookOpen && (
                <StyledCard $width={pageWidth} $height={pageHeight}>
                  <Page
                    pageNumber={page - 1}
                    scale={scale}
                    loading={<Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />}
                    noData=''
                  />
                  <PagePagination>
                    {page - 1}/{pages}
                  </PagePagination>
                </StyledCard>
              )}
              <StyledCard $width={pageWidth} $height={pageHeight}>
                <Page
                  inputRef={pageRef}
                  pageNumber={page}
                  scale={scale}
                  loading={<Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />}
                  noData=''
                />
                <PagePagination>
                  {page}/{pages}
                </PagePagination>
              </StyledCard>
            </PageWrapper>
          </Document>
        )}
      </Main>
    </>
  );
};

export default Reading;
