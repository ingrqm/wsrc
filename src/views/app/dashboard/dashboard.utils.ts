import { LanguageChampionship, Permission } from 'enums';

export const getTutorialUrl = (permission: Permission, languageChampionship: LanguageChampionship) => {
  switch (permission) {
    case Permission.newbie:
    case Permission.user:
      switch (languageChampionship) {
        case LanguageChampionship.en:
          return 'https://player.vimeo.com/video/704165934?h=4681a3fccb&title=0&byline=0&portrait=0';
        case LanguageChampionship.fr:
          return 'https://player.vimeo.com/video/704166182?h=0fbd851c3f&title=0&byline=0&portrait=0';
        default:
          return '';
      }
    case Permission.arbiter:
    case Permission.admin:
    case Permission.superAdmin:
      switch (languageChampionship) {
        case LanguageChampionship.en:
          return 'https://player.vimeo.com/video/704165529?h=870198a57f&title=0&byline=0&portrait=0';
        case LanguageChampionship.fr:
          return 'https://player.vimeo.com/video/704165342?h=59eae9d0a0&title=0&byline=0&portrait=0';
        default:
          return '';
      }
    default:
      return '';
  }
};
