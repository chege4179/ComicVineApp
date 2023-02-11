export interface GetCharactersResponse {
     error:                   string;
     limit:                   number;
     offset:                  number;
     number_of_page_results:  number;
     number_of_total_results: number;
     status_code:             number;
     results:                 Character[];
     version:                 string;
}

export interface Character {
     aliases:                    string;
     api_detail_url:             string;
     birth:                      null;
     count_of_issue_appearances: number;
     date_added:                 Date;
     date_last_updated:          Date;
     deck:                       string;
     description:                string;
     first_appeared_in_issue:    FirstAppearedInIssue;
     gender:                     number;
     id:                         number;
     image:                      Image;
     name:                       string;
     origin:                     FirstAppearedInIssue;
     publisher:                  FirstAppearedInIssue;
     real_name:                  string;
     site_detail_url:            string;
}

export interface FirstAppearedInIssue {
     api_detail_url: string;
     id:             number;
     name:           string;
     issue_number?:  string;
}

export interface Image {
     icon_url:         string;
     medium_url:       string;
     screen_url:       string;
     screen_large_url: string;
     small_url:        string;
     super_url:        string;
     thumb_url:        string;
     tiny_url:         string;
     original_url:     string;
     image_tags:       ImageTags;
}

export enum ImageTags {
     AllImages = "All Images",
     AllImagesPraetorLemnos = "All Images,Praetor Lemnos",
}
