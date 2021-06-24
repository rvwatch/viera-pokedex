# Pokedex Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description / Negotiated Requirements

* Fetch data from this open source JSON (based on the PokemonGO game): <https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json>
* Display the list of Pokemon however you like, making sure to show their “name,” “num,” “type,” and “weaknesses.”
* Make this list searchable via a search box. (External NPM libraries for search are equally as good to use, here, as custom search implementations. Determine what works best for you.)

  * For simplicity, just search through the names of the Pokemon, only.

* Also, make this list filterable via the “type” and “weaknesses” fields.

* Multiple filters should be able to be applied, and they should narrow the search, instead of expand it. This means that if I choose to filter for type “Grass” and type “Poison,” I should only get Pokemon with both the “Grass” and “Poison” types. This also means that if I choose to filter for type “Fire” and weakness “Ice,” I should only get Pokemon who are both “Fire” type and who have a weakness for “Ice.”
  * Note: Any solution to achieve selecting multiple filters is fine. Checkboxes would work. Two dropdown selects would also work, as long as multiple options can be selected within. Or any other solution you can think of or pre-made React component from a library should be fine. You don’t need to win any gold medals in usability or design, here. The main thing I want to see is how you implement the filtering functionality, rather than how well you make it all look or feel.

## Available Scripts

In the project directory, you can run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Tests not yet setup!

## UI/UX

Link to Figma Mood Board: <https://www.figma.com/file/hGgtAKFiGAZJZzlYDPhEOe/Pokedex-Challenge?node-id=0%3A1>

Link to rough figma wireframes: <https://www.figma.com/file/2Mhpt0FlAxa34RusKCHgSU/Untitled?node-id=0%3A1>

## Observations so far

I was quick to assume the spec was fairly straight forward. It wasn't until I was digging into the filtering for Type/Weakness that I realized the subtlety involved. I should have done more pseudocoding from the beginning to give a better idea as to what would be involved.

UI was interesting for this one. I started with the mobile first approach. I'm not familiar with the world of Pokemon, so apologies if I didn't do it justice! Forefront of my mind was the notion of switching back and forth between the Pokemon GO app, and the Pokedex itself. Thinking about the switching of screen and wanting to make the experiece fluid with a similar aesthetic, but distinctly different applications. I used elements of color and design from a few sites / apps that I researched. Specificlly the pokemon go app itself, as well as what appears to be the official pokemon site: <https://www.pokemon.com/us/pokedex/>

Given the time constraint, I struggled to prioritize my time. Often jumping between code and design though processes. That wasn't ideal and indicated to me that I need to revisit my overall process and approach to designing and coding a project. I'm a proponent of having a solid, finalized design in place before commiting to code as I think the design can often inform the code. However, under the time constraint I tried to merge the two and I think some elements suffered on both sides of the design/code spectrum. Such is the trade off of the scenario but I do think with some practice I can really narrow down that flow.

My filtering functionality fell short. I have some ideas and am confident with another day, it could be fully robust and dynamic as I'm intending.

I also didn't get to the full responsiveness of the site as intended. I think with relatively short work I can have the media queries working and accounting for that.

In general this could do with some refactoring. I'm about 90% of MVP, but I could refine my functions and design some more.
