export type SocialMediaAccount = {
    platform: "Instagram" | "TikTok";
    username: string;
  };
  export type Influencer = {
    firstName: string;
    lastName: string;
    socialAccounts: SocialMediaAccount[];
  };
  