# Bulbshare Tech Challenge 🦾

Dear Future Bulbsharian,

At Bulbshare, we are building a product which help makes consumer and brands closer together.
See it as a kind of "social network".

We are delighted to enlist your help in building one of its cool UI feature.

Expected Time: 3-5 hours total time. ⌛  (This is not a strict limit: you can spend as much or as little as you want.)

# IMPORTANT NOTES

1. We understand a take home test is a big investment in terms of time, but that will give you the opportunity
to see the kind of stuff we do here. If you enjoy building that feature, you'll have a great time working at Bulbshare !


2. Quality matters more than quantity !

It does not matter whether you finish or not, what we're mainly interested in, is:  
  - Your approach to tackle UI challenges like this one  
  - How you organize and structure your code ?  
  - How do you make it easy to read, extend, and maintain in the long term ?  
  - The quality you can deliver in a limited amount of time



3. This tech challenge must be done in ReactJS/Typescript. 
You can use `styled` or widgets library like `@mui, semantic...` for the styling. 
Apart from that you shouldn't need any extra library to build the features we request.
However, if you include any, please add some notes to explain why.

4. We don't expect the UI to be pixel perfect with the time constraint, so be pragmatic, and focus on the main feature first.




5. Please, don't forget to tell us the amount of time you dedicated to this exercise, and what you would have done if you had more time. 

6. To make it easy to review, please push your code to a private repo in github and create a PR for each feature your take on.
Then you can add `jaybe78` as reviewer.

7. If anything is unclear, don't hesitate to send an email at jbrice.r@bulbshare.com


## BACK-END

A back end is already set up on port 4000, but you're gonna have to do some work there...

The back-end contains a list of feed and comments in the directory `/server/data`, which simulates the DB.

There, you'll have to write different endpoints:    
1. An endpoint to return the list of feed with `PAGE_SIZE=5`
This endpoint should basically return (0-5, 5-10,...) based on the scrolling position.

2. An endpoint to return the list of comments by `briefref`

## FRONT-END

### 1. Feature: List of feed  

![](https://media.giphy.com/media/7P6XLWZakSI4cmTYxc/giphy.gif)

A feed is composed of:   
- Header (brand, brand name, and a link `Join Brief Now`)  
- Image (banner_image)  
- A feed title (feed_title)  


<u>Requirements:</u>

1. Display elements on the UI as seen in the demo.
2. Each feed should be horizontally centred, with some margin between each feed. 
3. The brand logo and the name should be left aligned, while the link `Join this brief` should be right aligned. 
4. The feed title should be displayed at the bottom left, on top of the image. 
5. Maintain aspect ratio of the image on different breakpoints.
6. At first load, it should only load the first 5 feed, then when scrolling to the bottom, it should fetch the next 5.


### 2. Feature: Feed Details

![](https://media.giphy.com/media/ebEzgbew7OxqnRiDxl/giphy.gif)

When clicking on a feed image, a fullscreen div should show up, on top of the list of feed.

<u>Requirements:</u>  
1. Show a page fullscreen on top of the feed.     
2. Add a close button on the left side to close the modal.


That div is composed of 2 parts:

#### Left side (available space)

 <u>Requirements:</u>  
  1. A div of 100% height which allows to scroll on multiple items.  
  
  
  In this case, you can scroll through 2 items:

###### First Item: Media 

   <u>Requirements:</u>  
   1. The `banner_image` should be centered horizontally.   
   2. The `banner_image` should take 55% of the available space.  
   3. We should have a black background behind the image.  
   4. Up/Down Arrows horizontally/vertically centred allowing to scroll through both items.  
   5. The Up Arrow should be disabled on first item and down arrow disabled on second item.
     
##### Second Item: Feed details

  <u>Requirements:</u>  
  
  A div (100% height) whose content should be horizontally centred, and stacks the following properties:

   1. brand `logo` at the top.   
   2. `feed_title`.  
   3. `starts_on` date with the following format (DD MMMM YYYY).  
   4. Text `banner_text`.  
   5. Image `ad_1_image`.  
   6. Image `ad_2_image`.  


#### Right side: List of comments (width: 500px)

The right part is a div which takes also 100% height, and does not move as opposed to the left part.
Its width is static and set to 500px.  

<u>Requirements:</u> 

1. At the top it should display brand logo and name.  
2. On a grey background, it should display the list of comments.

A comment is composed of:
- avatar  
- name  
- comment  

#### Assets

In the `/public` folder, you'll find 2 svgs you can use in your code:  
- 1 for the closing of the fullscreen modal.   
- up/down arrows for scrolling through items.
