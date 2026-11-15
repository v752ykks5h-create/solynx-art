# solynx homepage

Build a minimalist, clean artist webpage for solynx. with an Apple design aesthetic.

Key specifications:
- Background: #fffdfb (255, 253, 251) warm gallery paper across the entire site.
- Typography: Zen Kaku Gothic font throughout. Clean, refined, spacious tracking, deep neutral charcoal/black text.
- Artist name: solynx. (strictly lowercase with a trailing dot, no subtitle).
- Scroll mechanics: Pinned crossfade dissolve between screens (transition speed 1600 ms, breathing void 60 vh). When scrolling down, the previous screen seamlessly disappears and the new screen comes in smoothly, without standard browser scroll jitter.
- Navigation: Dual-path navigation. From the menu screen, clicking any section immediately crossfades directly to that screen (1600 ms), OR the visitor can simply continue scrolling to step through all sections in sequence via the same crossfade experience.
- Menu structure (anchored on the bottom left, lowercase with trailing full stops):
  01  selected works.
  02  projects.
  03  about.
  04  hello.

Screen sequence:
1. Landing page: Very clean opening screen with "solynx." (lowercase, trailing dot, no subtitle).
2. Selected work reveal: Fades in positioned on the bottom right of the viewport with a quiet, minimal caption.
3. Menu screen: Minimalist menu anchored in the bottom left with the four sections: selected works., projects., about., hello.
4. "selected works." section: 5 artworks placed screen-by-screen as you scroll or navigate:
   - Artwork 01: Top left
   - Artwork 02: Bottom right
   - Artwork 03: Slightly left of center
   - Artwork 04: Slightly right of center
   - Artwork 05: Bottom center
   - Work index numbering: "01 | 05", "02 | 05", "03 | 05", "04 | 05", "05 | 05" with leading zeroes and pipe separator.
5. "projects." section: Clean, reduced presentation of artist projects.
6. "about." section: Minimal biographical overview and artist statement.
7. "hello." section: Contact details, representation/gallery info, and inquiry links.

Keep the reduced, museum-grade aesthetic consistent across all screens and responsive viewports.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/dbae9b53-d589-4378-8f01-e329cd8c0897).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
