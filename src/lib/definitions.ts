export interface Data {
  results: Result[];
  total: number;
  total_pages: number;
}

export interface Result {
  alt_description: string;
  alternative_slugs: AlternativeSlugs;
  asset_type: string;
  blur_hash: string;
  breadcrumbs: [];
  color: string;
  created_at: Date;
  current_user_collections: [];
  description: null | string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: ResultLinks;
  promoted_at: Date;
  slug: string;
  sponsorship: null;
  topic_submissions: TopicSubmissions;
  updated_at: Date;
  urls: Urls;
  user: User;
  width: number;
}

export interface AlternativeSlugs {
  de: string;
  en: string;
  es: string;
  fr: string;
  it: string;
  ja: string;
  ko: string;
  pt: string;
}

export interface ResultLinks {
  download: string;
  download_location: string;
  html: string;
  self: string;
}

export interface TopicSubmissions {
  "macro-moments"?: MacroMoments;
  nature: MacroMoments;
  spring?: MacroMoments;
  wallpapers: MacroMoments;
}

export interface MacroMoments {
  approved_on: Date;
  status: string;
}

export interface Urls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}

export interface User {
  accepted_tos: boolean;
  bio: string;
  first_name: string;
  for_hire: boolean;
  id: string;
  instagram_username: string;
  last_name: string;
  links: UserLinks;
  location: string;
  name: string;
  portfolio_url: null | string;
  profile_image: ProfileImage;
  social: Social;
  total_collections: number;
  total_illustrations: number;
  total_likes: number;
  total_photos: number;
  total_promoted_illustrations: number;
  total_promoted_photos: number;
  twitter_username: null;
  updated_at: Date;
  username: string;
}

export interface UserLinks {
  followers: string;
  following: string;
  html: string;
  likes: string;
  photos: string;
  portfolio: string;
  self: string;
}

export interface ProfileImage {
  large: string;
  medium: string;
  small: string;
}

export interface Social {
  instagram_username: string;
  paypal_email: null;
  portfolio_url: null | string;
  twitter_username: null;
}
