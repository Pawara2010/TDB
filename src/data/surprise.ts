export type Memory = {
  id: string;
  image: string;
  caption: string;
  note: string;
  year: string;
};

export const recipient = {
  name: 'Thesali Damsahani',
  age: 30,
  from: 'Jordan',
};

export const letter = {
  greeting: 'Happy birthday, Maya.',
  paragraphs: [
  'Thirty years of you, and somehow the world still hasn’t figured out how you make every room feel warmer within about four minutes of walking into it.',
  'I made you this instead of a card because a card would have run out of room. Every year you collect people, stories, and terrible karaoke songs, and the rest of us just get to stand nearby and benefit from it.',
  'So here’s a small handful of the evidence — and then something at the end that I’ve been keeping quiet about for two months.'],

  signoff: 'All my love,'
};

export const memories: Memory[] = [
{
  id: 'picnic',
  image: "/15e2b818-77d1-49e3-b299-0a21f798f5e5.jpg",

  caption: 'The picnic that lasted until dark',
  note: 'You brought three desserts and forgot the plates. Still the best afternoon of that summer.',
  year: '2021'
},
{
  id: 'dinner',
  image: "/ef946f90-95d8-41d9-8330-c6614279c339.jpg",

  caption: 'Your table, always',
  note: 'Nine of us, one tiny kitchen, and a toast you made that half of us still quote.',
  year: '2022'
},
{
  id: 'roadtrip',
  image: "/616ce732-3031-46d1-99d7-9cb5e7b06c11.jpg",

  caption: 'Eleven hours, one playlist',
  note: 'We got lost twice on purpose. You said the detour was the point, and you were right.',
  year: '2023'
},
{
  id: 'party',
  image: "/8cd434e1-7300-4ea0-86ce-7f11df547adc.jpg",

  caption: 'Last New Year, 2am',
  note: 'Confetti in your hair for a week. Worth it. This is my favourite picture of you.',
  year: '2024'
}];


export const gift = {
  image: "/68c26110-e54c-4ef5-b2f9-d0302aef5998.jpg",

  teaser: 'One more thing',
  title: 'Two nights in Lisbon',
  subtitle: 'The 14th to the 16th of next month',
  detail:
  'Flights are booked, the little blue-tiled guesthouse you screenshotted last year is held under your name, and I already asked your boss. All you have to do is pack.',
  footnote: 'Check your email — the confirmation is sitting there waiting.'
};