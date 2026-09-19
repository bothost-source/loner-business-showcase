LONER TECH — BUSINESS WEBSITE SHOWCASE
========================================

WHAT THIS IS
------------
A mobile-first showcase where potential clients browse real, standalone
demo websites LONER TECH has built — one full site per business type:
Restaurant, Salon, Hotel, Real Estate, Store.

This is now a genuine multi-page project, not a single page pretending
to be five. Each demo below is its own complete HTML page with its own
navigation, hero photo, full content, and gallery — the same way a real
client site would be structured.


PROJECT STRUCTURE
-------------------
loner-business-showcase/
│
├── index.html          Landing page + catalogue + contact
├── restaurant.html      Ember & Plate — full standalone site
├── salon.html            Noir & Bloom Studio — full standalone site
├── hotel.html            The Ivory Haven — full standalone site
├── real-estate.html      Northline Properties — full standalone site
├── store.html            Vanta Market — full standalone site
├── style.css            Shared design system for every page
├── script.js            Shared behavior (mobile nav + filters)
│
└── images/
    ├── restaurant/
    ├── salon/
    ├── hotel/
    ├── real-estate/
    └── store/


HOW TO RUN THE PROJECT
-----------------------
1. Open index.html directly in a browser, or
2. Serve the folder locally, e.g.:
     python3 -m http.server 8000
   then visit http://localhost:8000


HOW EACH DEMO PAGE IS BUILT
------------------------------
Every demo page follows the same real-website pattern:

1. Sticky nav bar — business name, a small "Demo Concept" tag, section
   links (About / Menu-Services-Rooms-Listings-Catalogue / Gallery),
   a link back to the full catalogue, and a "Request a Website" button.
   Under 900px wide, this collapses into a hamburger menu (tap to open
   a full-height mobile menu) — this is handled automatically by
   script.js for any page using the standard nav markup.

2. Full-bleed hero photo — that business's own hero.jpg as a background
   image with a dark gradient overlay, the business name, a one-line
   description, and a call to action. If hero.jpg is missing, the
   section just shows a solid color instead of a broken image — it
   never breaks the layout.

3. About — a short real description, paired with a second photo where
   one exists (two columns on larger screens, stacked on mobile).

4. The core content for that business type:
     Restaurant     → filterable Menu (Starters / Main Dishes / Drinks / Desserts)
     Salon          → filterable Services (Hair / Beauty)
     Hotel          → Rooms (image cards) + Amenities (plain list)
     Real Estate    → filterable Property Listings (image cards with
                       full detail: bed/bath, location, status, features)
     Store          → filterable Catalogue (image cards per product)
   Filtering is handled generically by script.js: any ".filter-bar" of
   buttons with data-filter="..." next to a container whose items carry
   data-tag="..." will filter automatically — no per-page JS needed.

5. Gallery — a real photo grid (opens each photo full-size in a new
   tab on click). Skipped on pages that don't have enough distinct
   photos for it (Real Estate and Store — their catalogue/listing
   images already do this job).

6. "Request a Website" CTA banner — on every single demo page, not
   just the homepage, linking back to index.html#contact.

7. Footer — small credit line and a link back to the catalogue.

No page includes a map, a booking system, a cart, checkout, or login —
none of those are real here, so none of them are shown. See "NO GOOGLE
MAPS / NO FAKE SYSTEMS" below.


RESPONSIVE BEHAVIOR
----------------------
The layout is built with fluid type (clamp()) and CSS grid, with real
breakpoints — not just one mobile layout stretched wider:
  - Under 900px: hamburger navigation, single-column content, 2-column
    photo grids.
  - 640–979px: 2-column card/category grids.
  - 980px and up: 3-column card grids, wider hero text, side-by-side
    About sections.
Test at a few widths (a phone, a tablet, a laptop) after any edit —
adding a long business name or an extra nav link can affect wrapping.


PER-BUSINESS COLOR THEME
----------------------------
Each demo page sets a data-theme attribute on <body> (e.g.
data-theme="restaurant") that swaps the accent color used for buttons,
prices, and highlights — defined once in style.css:
  restaurant    burnt ember     #C1440E
  salon         deep rose       #8B3A5C
  hotel         deep navy       #1F4655
  real-estate   forest green    #33562F
  store         warm gold       #A8720C
This is what makes each demo feel like a distinct real business rather
than five copies of the same template. Change these values in style.css
under "Per-business accent themes" if you want a different palette.


HOW TO EDIT CONTENT
-----------------------
Each business's content lives directly in its own HTML file — there is
no separate data file to keep in sync. To change a name, description,
price, or section, open that business's .html file and edit the text
in place. To add a new item to a Menu/Services/Catalogue/Listings
section, copy an existing row or card and change its text, image path,
and data-tag.


HOW TO ADD OR REPLACE IMAGES
--------------------------------
Every image is referenced by an exact filename. Save your photo into
the matching folder using that name and it appears automatically — no
HTML changes needed. If a file doesn't exist yet, that image slot is
skipped cleanly (no broken-icon), never faked.

RESTAURANT — images/restaurant/
  hero.jpg  interior.jpg  dish-1.jpg  dish-2.jpg  dish-3.jpg  drink.jpg  dessert.jpg

SALON — images/salon/
  hero.jpg  interior.jpg  hair-styling.jpg  braiding.jpg  nails.jpg  makeup.jpg  workstation.jpg

HOTEL — images/hotel/
  hero.jpg  lobby.jpg  classic-room.jpg  executive-room.jpg  suite.jpg  restaurant.jpg  lounge.jpg

REAL ESTATE — images/real-estate/
  hero.jpg  apartment-3bed.jpg  duplex-4bed.jpg  apartment-2bed.jpg

STORE — images/store/
  hero.jpg  shirt.jpg  trousers.jpg  jacket.jpg  wallet.jpg  watch.jpg  bag.jpg  sneakers.jpg  loafers.jpg

To use a different file type, just make sure the filename in the HTML
matches exactly, including the extension (.jpg, .png, .webp all work).


NO GOOGLE MAPS / NO FAKE SYSTEMS
------------------------------------
These are demo concepts with no real address, so there is no map,
embedded or linked, anywhere in this project — adding one would mean
either a fake location or someone else's real one, and neither is
acceptable. For the same reason, there's no booking system, cart,
checkout, or login anywhere. If you later connect a real address,
a real booking system, or real payments for an actual client, add the
corresponding button or embed only once it's genuinely wired up.


HOW TO ADD LONER TECH'S CONTACT INFO
--------------------------------------
Open index.html and find the "contact-links" section near the bottom.
Each link currently has `hidden` and a placeholder `href="#"`:

    <a href="#" class="btn btn-primary" hidden>Message on WhatsApp</a>

For each real channel you have, replace the href and remove `hidden`:

    <a href="https://wa.me/15551234567" class="btn btn-primary">Message on WhatsApp</a>

Leave any channel you don't have yet exactly as it is — hidden, with
no real value. Never publish a placeholder link.


HOW TO ADD A NEW BUSINESS OR CATEGORY
-----------------------------------------
1. Duplicate the .html file closest to the new business (e.g. copy
   restaurant.html for another restaurant, or as a starting layout for
   a new category).
2. Update the <title>, meta description, data-theme, nav links,
   hero content, and every section's text and image paths.
3. Add a matching folder under images/ and save real photos there
   using clear, consistent filenames.
4. Add a category-card to index.html's catalogue grid linking to the
   new page.
Note: with more than one demo per category, you may want to reintroduce
an intermediate "choose a demo" list page for that category — this
version links straight from the homepage to each demo since there's
exactly one per category.


HOW TO TEST THE PROJECT
--------------------------
1. Open every page and confirm the hero photo, About photo, and every
   gallery/card image actually load (no broken image icons).
2. On each page, tap through the mobile menu (narrow the browser or
   use a phone) and confirm every link works and the menu closes after
   tapping a link.
3. On each page with filters, click every chip and confirm only the
   matching items stay visible, and "All" brings everything back.
4. Click through every "Request a Website" button and confirm it
   reaches the contact section — and that the buttons there are hidden
   until you've added real values.
5. Resize the browser through phone, tablet, and laptop widths and
   confirm nothing overlaps, overflows, or looks stretched.


NO-FAKE-CONTENT RULES
------------------------
- No Lorem ipsum, no placeholder phone numbers/emails/addresses/maps.
- No fake reviews, ratings, testimonials, stats, awards, or client
  names.
- Every fictional demo is labeled "Demo Concept" in its nav bar and
  hero — small and honest, never presented as an existing client.
- Every button performs a real action. If a feature (booking, cart,
  checkout, login, maps) isn't actually implemented, there's no button
  for it — don't add one back in without the real system behind it.
- Don't reference an image filename until the real file exists in that
  folder.
