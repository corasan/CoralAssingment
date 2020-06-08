# CoralAssingment

I tried to setup the project how I usually would in a personal project. I wanted to keep things simple while still showing a little bit of state management knowledge, so for state persistence I used the `Context` API, I actually enjoy `Context`. Normally I would use Redux but since this is a small app I went with something that is already integrated.


In the `src/views` folder, I normally have `views` within their own folders because most of the time I work with views devided into smaller components that are not shareable with other views/components. In the `src/hooks` folder I create my own hooks to avoid repeating code, a tiny example of that would be calling and importing the Context API every single time in every component I want to access the context's state. In the `src/components` folder is where shareable components live, like the `ArticleWebview` component, it a real world app it could be a component that used to open articles in the different parts of the app. I did place the `TopHeadlineItem` component in that folder even though it's specific to the `TopHeadline` view, the reason is that I was trying to keep the folder tree a bit cleaner because it's a small app.



Also, normally I like to use flow types in every component I create when working in a team based environment.


I hope you can learn more about my how I code and do things.

You can also checkout the financial project that I've been working on in the link below. It's a bit messy because right now im working on a rework. I actually based the `ArticleWebview` component on a similar component I'm using in the app.

https://github.com/corasan/stocket



## Steps to run the app


To run the app you first need to create a `config.js` file in the root of the project. I like to create a config file for my secrets and and api keys and run a script pre-build that will add the env variables to the build/config file. Content of `config.js`: 

`export const NEWS_API_KEY = 'your news API key'`


1. Clone repo and go in the directory

2. Install dependencies

`yarn install`

3. Install pods

`cd ios && pod install && cd ..`

4. Build and run

`yarn ios`
