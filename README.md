# top-shottas

https://heuristic-bartik-d0d839.netlify.app/

## Project Description

Top-Shottas is an Airtable and React build where the user is able to view the #1 NBA draft picks since 1947. From the homepage the user is able to navigate to and click on an icon that leads to the teams and displays images of players that were drafted by that specific team. Clicking on an image takes the user to a page where they are able to view more details about the player. The user will be able to view and leave comments on this page.

## Wireframes

The wireframes below show just a few pages of my app. Specifically, the landing page and the player details page. The homepage contains all 30 NBA teams clickable icons. Also, there will be dropdown menus where users can sort through specific teams as well as the draft years. Clicking on a teams icon will take you to a page displaying all of the draft selections from that specific team.

![imageAlt](https://i.imgur.com/ombroPc.png)
https://whimsical.com/top-shottas-main-page-PvSjUcyHAukTyYaunrsxh9

![imageAlt](https://i.imgur.com/FK3h8HR.png)
https://whimsical.com/top-shottas-details-page-2YnYSPukJ6ruL2ZKHEbepz

![imageAlt](https://i.imgur.com/epMoNoy.png)
https://whimsical.com/mobile-rendering-C4mJyahJbLjxCFQi1fyQhR

## Component Hierarchy

![imageAlt](https://i.imgur.com/IfCKLfU.png)
https://whimsical.com/component-hierarchy-5q7KfX6s83oXxJ5niJkQqS

## API and Data Sample

Airtable is returning the data for this base as follows:

```
{
    "records": [
        {
            "id": "rec4lfBAhyczbNQx4",
            "fields": {},
            "createdTime": "2021-12-02T19:36:50.000Z"
        },
        {
            "id": "rectcV9sebTsRrxco",
            "fields": {
                "height": "Unknown",
                "selectedBy": " Pittsburgh Ironmen",
                "college": "Texas Wesleyan",
                "weight": "Unknown",
                "year": 1946,
                "bio": "Clifton McNeely (June 22, 1919 – December 26, 2003) was an American basketball player and coach. A 5 ft 10 in (1.78 m) forward, he played college basketball for the Texas Wesleyan Rams for three seasons and led the National Association of Intercollegiate Athletics (NAIA) in scoring during his senior season in 1946–47. McNeely was the first player ever drafted in the National Basketball Association (NBA) when he was selected by the Pittsburgh Ironmen as the first pick of the league's inaugural 1947 draft. He never played professional basketball and instead pursued a coaching career at Pampa High School in Texas. ",
                "position": "Guard",
                "player": "Clifton McNeely"
            },
            "createdTime": "2021-12-02T01:40:12.000Z"
        },
        {
            "id": "recwQBySenK3Ap7Tb",
            "fields": {
                "year": 1984,
                "selectedBy": "Chicago Bulls",
                "player": "Michael Jordan"
            },
            "createdTime": "2021-12-02T01:40:12.000Z"
        }
    ]
}

```

### MVP/PostMVP

#### MVP

- Home page with clickable icons that route to each respective team.
- Page that displays all players
- Page that displays all of the years
- Team details page
- Player details page with attributes, bio and post comments section.
- Get and post comments from Airtable.

#### PostMVP

- Delete posts from the feed and airtable.
- Name change.
- Logo change.
- Add additional sports.
- Add video highlights.
- Add star ranking

## Project Schedule

| Day      | Deliverable                         | Status  |
| -------- | ----------------------------------- | ------- |
| Dec 2-11 | Proposal Approval / Airtable Setup  | Pending |
| Dec 03   | Component Creation / Get, Set, Post | Pending |
| Dec 06   | Dec. 03 cont'd / CSS Components     | Pending |
| Dec 07   | CSS Components cont'd / MVP         | Pending |
| Dec 08   | Advanced CSS / PostMVP              | Pending |
| Dec 09   | Presentations                       | Pending |

## Timeframes

| Component                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------ | :------: | :------------: | :-----------: | :---------: |
| Proposal                 |    H     |      2hrs      |     2hrs      |    -hrs     |
| Airtable setup           |    H     |      5hrs      |      1hr      |    -hrs     |
| Clickable icons          |    H     |      1hrs      |      1hr      |    -hrs     |
| Data population / Home   |    H     |      3hrs      |     3hrs      |    -hrs     |
| Data population / Team   |    H     |      3hrs      |     2hrs      |    -hrs     |
| Data population / Player |    H     |      3hrs      |     2hrs      |    -hrs     |
| Comments section         |    H     |      3hrs      |     2hrs      |    -hrs     |
| Data creation / Home     |    H     |      3hrs      |     3hrs      |    -hrs     |
| Data creation / Team     |    H     |      3hrs      |      1hr      |    -hrs     |
| Data creation / Player   |    H     |      3hrs      |      1hr      |    -hrs     |
| Component CSS pg 1       |    H     |      4hrs      |     4hrs      |    -hrs     |
| Component CSS pg 2       |    H     |      4hrs      |     4hrs      |    -hrs     |
| Component CSS pg 3       |    H     |      4hrs      |     4hrs      |    -hrs     |
| Total                    |    H     |     41hrs      |     30hrs     |    -hrs     |

## SWOT Analysis

### Strengths:

I have a good idea of what I want my website to look like as far as the functionalities. I feel like I will be able to do the backend work very easily.

### Weaknesses:

I am sure I will run into some issues when it comes to rendering items on pages as well as styling. However, I am confident in my ability to work through my issues and figure out the solutions on my own. I will reach out for help if I am stuck on an issue for more than an hour.

### Opportunities:

I am gaining more confidence in my abilities to help others out with their mobile apps and websites as a result of what I have learned in this unit.

### Threats:

I tend to think big and make things more complex. I usually start off with a few cool ideas in mind and that eventually snowball into a grand overall project. I am going to do my best to focus on showing that I fully grasp the concept of React. I will save my cool, grand ideas for my MVP.
