import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenatorsService {

  constructor() { }

  getSenators() {
    const senators = [{
        'id': 'A000360',
        'title': 'Senator, 2nd Class',
        'short_title': 'Sen.',
        'api_uri': 'https://api.propublica.org/congress/v1/members/A000360.json',
        'first_name': 'Lamar',
        'middle_name': null,
        'last_name': 'Alexander',
        'suffix': null,
        'date_of_birth': '1940-07-03',
        'gender': 'M',
        'party': 'R',
        'leadership_role': null,
        'twitter_account': 'SenAlexander',
        'facebook_account': 'senatorlamaralexander',
        'youtube_account': 'lamaralexander',
        'govtrack_id': '300002',
        'cspan_id': '5',
        'votesmart_id': '15691',
        'icpsr_id': '40304',
        'crp_id': 'N00009888',
        'google_entity_id': '/m/01rbs3',
        'fec_candidate_id': 'S2TN00058',
        'url': 'https://www.alexander.senate.gov/public',
        'rss_url': 'https://www.alexander.senate.gov/public/?a=RSS.Feed',
        'contact_form': 'http://www.alexander.senate.gov/public/index.cfm?p=Email',
        'in_office': true,
        'dw_nominate': 0.323,
        'ideal_point': null,
        'seniority': '15',
        'next_election': '2020',
        'total_votes': 577,
        'missed_votes': 26,
        'total_present': 0,
        'last_updated': '2018-11-29 15:01:25 -0500',
        'ocd_id': 'ocd-division/country:us/state:tn',
        'office': '455 Dirksen Senate Office Building',
        'phone': '202-224-4944',
        'fax': '202-228-3398',
        'state': 'TN',
        'senate_class': '2',
        'state_rank': 'senior',
        'lis_id': 'S289',
        'missed_votes_pct': 4.51,
        'votes_with_party_pct': 96.91
    }];

    return senators;
  }

}
