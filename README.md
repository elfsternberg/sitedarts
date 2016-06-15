Sitedarts are content-within-a-page links laid out along the right
side of the viewport, spaced proportionately to their target anchor
positions within the document.  They are meant to give users a visual
indicator of where they are within long, scrolling documents, and to
encourage exploration below the fold.  The content of a dart is
informed by <a name=""> ... </a> entries.

Sitedarts was inspired by book darts (www.bookdarts.com), hammered
copper pointers that I regularly use in my notebooks to keep track of
stuff.  I wanted a page-side view of my anchors and headers since I
develop code for e-book readers.

## Installation

Sitedarts uses jquery (1.3.2 or better required) and jquery.easing.

## Copyright 

Sitedarts is copyright (c) 2011, 2016 Elf M. Sternberg.  Included
libraries are covered by their respective copyright holders, and are
used with permission of the licenses included.  See the MIT-LICENSE file
for the license on sitedarts.js itself.

## To Do

Provide an alternative text on hover.  Provide a mechanism for
describing the alternative text.  Provide a way that the <a name="">
anchor can inform the visual content of the dart.

Provide themes for dart types (metal, glass, plain, colorful, drab).

Fix the arbitrariness of the layout: ensure that the bottom of the
bottom dart, and the top of the top dart, are within the viewport.

Allow the darts to be on the left, or even across the top and bottom of
the viewport.

Guarantee easing to the target even when the target mark is well
within the viewport at the bottom of the document.  

Set a highlight class on the dart corresponding to the anchor the user
is "within."  This is a nebulous concept.  If two or more anchors are
visible on the screen, keep the lower one highlighted if it was the last
one chosen.  (cf. Eugene Jarvis' "The way a program looks smart is it
doesn't do anything stupid.")

Allow sitedarts to work within an arbitrary container pair, rather
than $(window) and $(document).  

Allow configuration to narrow the viewport.

## Stretch goal

Provide an alternative text search input box and decorate the sitedart
layout with links to searched-for terms.  On hover, provide some
context.  
