import config from "../config";

class UserUtil {
  static getAvatar(user) {
    if (!user) {
      return config.avatarURL;
    }
    return user.get('profile').get('avatar') || config.avatarURL;
  }

  static getNickname(user) {
    if (!user) {
      return "Guest";
    }
    return user.get('profile').get('nickname') || user.get('username');
  }

  static getBio(user) {
    if (!user) {
      return "Welcome to XJTUOJ";
    }
    return user.get('profile').get('bio') || "Boring";
  }

  static getEmail(user) {
    if (!user) {
      return "guest@funcxy.com";
    }
    return user.get('email');
  }

  static getUsername(user) {
    if (!user) {
      return "guest";
    }
    return user.get('username');
  }

  static getMessagesCount(user) {
    if (!user) {
      return 0;
    }
    return user.get('messages').size;
  }
}

export default UserUtil;