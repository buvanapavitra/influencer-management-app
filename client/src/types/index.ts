export type SocialMediaAccount = {
    platform: "Instagram" | "TikTok";
    username: string;
  };
  export type Influencer = {
    id: string;
    firstName: string;
    lastName: string;
    socialAccounts: SocialMediaAccount[];
  };
  