import { Permission } from 'enums';

export const getTutorialUrl = (permission: Permission) => {
  switch (permission) {
    case Permission.user:
      return 'https://www.youtube.com/embed/QK5EVGqNg8U';
    case Permission.arbiter:
      return 'https://www.youtube.com/embed/QK5EVGqNg8U';
    case Permission.admin:
    case Permission.superAdmin:
      return 'https://www.youtube.com/embed/QK5EVGqNg8U';
    default:
      return '';
  }
};
