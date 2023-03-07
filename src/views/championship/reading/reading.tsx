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
import { Main, Options, PagePagination, PageWrapper, StyledCard, MainWrapper } from './reading.styled';

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

  let pdfDocSize = 550;
  if (window.innerWidth >= 991) {
    pdfDocSize = 800;
  }

  const book = useMemo(
    () =>
      competition.languageChampionship &&
      competition.age &&
      books[competition.languageChampionship][getAgeEnum(competition.age)],
    [competition]
  );

  const pageRef = useCallback((node: any) => {
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

  useEffect(() => {
    if (skipCompetition.skipReading) {
      if (competition.startTest) {
        navigate(appUrls.championship.test);
      } else {
        handleStartTest();
      }
    }

    if (competition.startTest !== null) {
      navigate(appUrls.championship.test);
      return;
    }

    if (competition.endTest !== null) {
      navigate(appUrls.championship.test);
    }
  }, [competition.startTest, competition.endTest, skipCompetition.skipReading]);

  return skipCompetition.skipTest || competition.startTest !== null || competition.endTest !== null ? null : (
    <MainWrapper className='main-wrapper'>
      <Main>
        <Button className='previous-page hidden md:inline-block' onClick={handlePreviousPage} disabled={page <= 1}>
          <LeftOutlined />
        </Button>
        {book && (
          <Document className='book-doc' file={book.file} onLoadSuccess={handleDocumentLoadSuccess}>
            <Options>
              <Button className='first-page' onClick={handleFirstPage}>
                {t('championship.reading.navigation.firstPage')}
              </Button>
              <Button
                className='previous-page inline-block md:hidden'
                onClick={handlePreviousPage}
                disabled={page <= 1}
              >
                <LeftOutlined />
              </Button>
              <Button className='zoom-out' icon={<ZoomOutOutlined />} onClick={handleZoomOut} />
              <Button
                className='toggle-book hidden md:inline-block'
                icon={isBookOpen ? <BookOutlined /> : <ReadOutlined />}
                onClick={handleToggleBook}
              />
              <Button className='zoom-in' icon={<ZoomInOutlined />} onClick={handleZoomIn} />
              <Button className='next-page inline-block md:hidden' onClick={handleNextPage} disabled={page >= pages}>
                <RightOutlined />
              </Button>
              {page !== pages ? (
                <Button className='last-page' onClick={handleLastPage}>
                  {t('championship.reading.navigation.lastPage')}
                </Button>
              ) : (
                <Button className='start-test-option inline-block md:hidden' type='primary' onClick={handleConfirm}>
                  {t('championship.reading.navigation.startTest')}
                </Button>
              )}
            </Options>
            <PageWrapper>
              {isBookOpen && (
                <StyledCard className={isBookOpen ? 'left-page' : ''}>
                  <Page
                    pageNumber={page - 1}
                    height={pdfDocSize}
                    scale={scale}
                    loading={<Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />}
                    noData=''
                  />
                  <PagePagination>
                    {page - 1}/{pages}
                  </PagePagination>
                </StyledCard>
              )}
              <StyledCard>
                <Page
                  height={pdfDocSize}
                  scale={scale}
                  inputRef={pageRef}
                  pageNumber={page}
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
        {page !== pages ? (
          <Button className='next-page hidden md:inline-block' onClick={handleNextPage} disabled={page >= pages}>
            <RightOutlined />
          </Button>
        ) : (
          <Button className='start-test hidden md:inline-block' type='primary' onClick={handleConfirm}>
            {t('championship.reading.navigation.startTest')} <RightOutlined />
          </Button>
        )}
      </Main>
    </MainWrapper>
  );
};

export default Reading;
