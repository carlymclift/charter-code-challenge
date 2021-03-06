const fakeData = {
  restaurants: [
    {
        "id": "f223fdd0-4adc-423e-9747-980a66c256ca",
        "name": "Old Hickory Steakhouse",
        "address1": "201 Waterfront St",
        "city": "Oxon Hill",
        "state": "MD",
        "zip": "20745",
        "lat": "38.782098",
        "long": "-77.017492",
        "telephone": "(301) 965-4000",
        "tags": "Social,Food and Dining,Restaurants,Steakhouses",
        "website": "http://www.gaylordnational.com",
        "genre": "Steak,American,Contemporary,Seafood,Cafe",
        "hours": "Open Daily 5:30 PM-10:00 PM",
        "attire": "business casual"
    },
    {
        "id": "00b35e1a-82b1-4988-b8b9-6df826db2818",
        "name": "Matsuhisa",
        "address1": "303 E Main St",
        "city": "Aspen",
        "state": "CO",
        "zip": "81611",
        "lat": "39.190723",
        "long": "-106.82031",
        "telephone": "(970) 544-6628",
        "tags": "Social,Food and Dining,Restaurants,Japanese,Social,Food and Dining,Restaurants,Sushi",
        "website": "http://www.matsuhisaaspen.com",
        "genre": "Japanese,Sushi,Asian,Contemporary,Seafood",
        "hours": "Open Daily 5:30 PM-9:00 PM",
        "attire": "business casual"
    },
    {
        "id": "0f41a3d0-0641-4eef-b7fd-706f083cf0d5",
        "name": "Fleurie Restaurant",
        "address1": "108 3rd St NE",
        "city": "Charlottesville",
        "state": "VA",
        "zip": "22902",
        "lat": "38.030526",
        "long": "-78.479785",
        "telephone": "(434) 971-7800",
        "tags": "Social,Food and Dining,Restaurants,French",
        "website": "http://www.fleurierestaurant.com",
        "genre": "French,European,Cafe,Continental,American",
        "hours": "Mon-Thu 5:30 PM-9:00 PM; Fri-Sat 5:30 PM-10:00 PM",
        "attire": "business casual"
    },
    {
        "id": "0b4bfe46-3e60-4de4-82ba-2dd8e5d46b56",
        "name": "The Capital Grille",
        "address1": "500 Crescent Ct",
        "city": "Dallas",
        "state": "TX",
        "zip": "75201",
        "lat": "32.794749",
        "long": "-96.804099",
        "telephone": "(214) 303-0500",
        "tags": "Social,Food and Dining,Restaurants,Steakhouses,Social,Food and Dining,Restaurants,American",
        "website": "http://www.thecapitalgrille.com",
        "genre": "Steak,American",
        "hours": "Mon-Thu 11:00 AM-10:00 PM; Fri 11:00 AM-11:00 PM; Sat 5:00 PM-11:00 PM; Sun 5:00 PM-9:00 PM",
        "attire": "business casual"
    },
    {
        "id": "cd273a24-f8de-44f6-8add-028e22229293",
        "name": "Boston Lobster Feast",
        "address1": "8731 International Dr",
        "city": "Orlando",
        "state": "FL",
        "zip": "32819",
        "lat": "28.43897",
        "long": "-81.470707",
        "telephone": "(407) 248-8606",
        "tags": "Social,Food and Dining,Restaurants,Seafood,Social,Food and Dining,Restaurants,American",
        "website": "http://www.bostonlobsterfeast.com",
        "genre": "Seafood,International,American,Oysters,Cafe",
        "hours": "Mon-Fri 4:00 PM-10:00 PM; Sat-Sun 2:00 PM-10:00 PM",
        "attire": "Casual"
    },
    {
        "id": "9ebb46cd-d4db-4a31-b3a9-dfe41b6c329f",
        "name": "Earth",
        "address1": "354 Goose Rocks Rd",
        "city": "Kennebunkport",
        "state": "ME",
        "zip": "04046",
        "lat": "43.413001",
        "long": "-70.428904",
        "telephone": "(207) 967-6550",
        "tags": "Social,Food and Dining,Restaurants,American,Social,Bars",
        "website": "http://www.earthathiddenpond.com",
        "genre": "American,Contemporary",
        "hours": "Open Daily 5:30 PM-9:30 PM",
        "attire": "Casual"
    },
    {
        "id": "71764c4a-52fc-4565-8f5a-19fed53ef049",
        "name": "The Capital Grille",
        "address1": "16489 N Scottsdale Rd",
        "city": "Scottsdale",
        "state": "AZ",
        "zip": "85254",
        "lat": "33.637215",
        "long": "-111.924262",
        "telephone": "(480) 348-1700",
        "tags": "Social,Food and Dining,Restaurants,Steakhouses,Social,Food and Dining,Restaurants,American",
        "website": "http://www.thecapitalgrille.com",
        "genre": "Steak,American",
        "hours": "Mon-Thu 11:00 AM-10:00 PM; Fri 11:00 AM-11:00 PM; Sat 5:00 PM-11:00 PM; Sun 5:00 PM-9:00 PM",
        "attire": "business casual"
    },
    {
        "id": "0491b590-5bc4-4899-957a-4659d01b1049",
        "name": "Angelo's 677 Prime",
        "address1": "677 Broadway",
        "city": "Albany",
        "state": "NY",
        "zip": "12207",
        "lat": "42.653271",
        "long": "-73.748583",
        "telephone": "(518) 427-7463",
        "tags": "Social,Food and Dining,Restaurants,Steakhouses,Social,Food and Dining,Restaurants,Seafood,Social,Food and Dining,Restaurants,American",
        "website": "http://www.677prime.com",
        "genre": "Steak,American,Seafood,International,Traditional",
        "hours": "Mon-Fri 11:30 AM-10:00 PM; Sat 5:30 PM-10:00 PM",
        "attire": "business casual"
    },
    {
        "id": "673d4ab1-8850-4a69-9a25-36a98f584ce6",
        "name": "Feast at Lele",
        "address1": "505 Front St",
        "city": "Lahaina",
        "state": "HI",
        "zip": "96761",
        "lat": "20.867754",
        "long": "-156.675512",
        "telephone": "(808) 667-5353",
        "tags": "Social,Food and Dining,Restaurants,International",
        "website": "http://www.feastatlele.com",
        "genre": "Hawaiian,Polynesian,Pacific Rim,Cafe,Vietnamese",
        "hours": "Open Daily 5:30 PM-8:30 PM",
        "attire": "business casual"
    },
    {
        "id": "8a936f27-bcf4-485b-9522-219451bc8cec",
        "name": "Cafe Cimino Country Inn",
        "address1": "616 Main St",
        "city": "Sutton",
        "state": "WV",
        "zip": "26601",
        "lat": "38.663967",
        "long": "-80.704248",
        "telephone": "(304) 765-2913",
        "tags": "Social,Food and Dining,Restaurants,Italian,Social,Food and Dining,Cafes,Coffee and Tea Houses",
        "website": "http://www.cafeciminocountryinn.com",
        "genre": "Cafe,Italian,Bistro,Contemporary,Vegetarian",
        "hours": "Tue 4:00 PM-9:00 PM; Wed-Sat 5:00 PM-9:00 PM",
        "attire": "business casual"
    },
    {
        "id": "3e394ac5-f9da-4923-ac83-a9c59fe3b195",
        "name": "La Mer",
        "address1": "2199 Kalia Rd",
        "city": "Honolulu",
        "state": "HI",
        "zip": "96815",
        "lat": "21.277744",
        "long": "-157.832012",
        "telephone": "(808) 923-2311",
        "tags": "Social,Food and Dining,Restaurants,French,Social,Food and Dining,Restaurants,Seafood",
        "website": "http://www.halekulani.com/dining/la_mer/",
        "genre": "French,Hawaiian,Seafood,European,Vegetarian",
        "hours": "Open Daily 5:30 PM-9:30 PM",
        "attire": "formal"
    },
    {
        "id": "a871ef20-fd03-4a3d-81a3-8ff8089b911a",
        "name": "Rocco's Cheesecake",
        "address1": "1701 Pico Blvd",
        "city": "Santa Monica",
        "state": "CA",
        "zip": "90405",
        "lat": "34.017988",
        "long": "-118.472702",
        "telephone": "(310) 396-1701",
        "tags": "Social,Food and Dining,Bakeries,Social,Food and Dining,Cafes,Coffee and Tea Houses,Social,Food and Dining,Restaurants",
        "website": "http://www.roccoscheesecake.com",
        "genre": "Coffee",
        "hours": "Mon-Thu 11:00 AM-8:00 PM; Fri 11:00 AM-10:00 PM; Sat 10:00 AM-10:00 PM; Sun 11:00 AM-8:00 PM",
        "attire": "Casual"
    },
    {
        "id": "6f305792-12a2-4501-9559-6884348931db",
        "name": "Ireland's Steakhouse",
        "address1": "250 Racquet Club Rd",
        "city": "Weston",
        "state": "FL",
        "zip": "33326",
        "lat": "26.12478",
        "long": "-80.376143",
        "telephone": "(954) 349-5656",
        "tags": "Social,Food and Dining,Restaurants,Steakhouses,Social,Food and Dining,Restaurants,American",
        "website": "http://www.bonaventureresortandspa.com/restaurants_and_lounges/",
        "genre": "Steak,American,Seafood,Irish,Cafe",
        "hours": "Tue-Sat 5:30 PM-10:30 PM",
        "attire": "casual"
    },
    {
        "id": "651628a1-9cea-4755-ac68-eaed5a0bb188",
        "name": "A Chef's Kitchen",
        "address1": "501 Prince George St",
        "city": "Williamsburg",
        "state": "VA",
        "zip": "23185",
        "lat": "37.272483",
        "long": "-76.707708",
        "telephone": "(757) 564-8500",
        "tags": "Social,Food and Dining,Restaurants,American,Social,Food and Dining,Restaurants,Seafood",
        "website": "http://www.achefskitchen.biz",
        "genre": "American,Seafood,International,Asian,Cafe",
        "hours": "Tue-Sat 10:00 AM-5:30 PM",
        "attire": "business casual"
    },
    {
        "id": "02d3bff4-9381-4abf-914e-787bd6ecc099",
        "name": "Artisanal Restaurant",
        "address1": "1200 Dobbins Rd",
        "city": "Banner Elk",
        "state": "NC",
        "zip": "28604",
        "lat": "36.15378",
        "long": "-81.840418",
        "telephone": "(828) 898-5395",
        "tags": "Social,Food and Dining,Restaurants,American",
        "website": "http://www.artisanalnc.com",
        "genre": "American,Contemporary",
        "hours": "Tue-Sun 5:30 PM-10:00 PM",
        "attire": "business casual"
    },
    {
        "id": "bdec889f-56d0-44dc-9297-d47f54094c3c",
        "name": "Lulou's Restaurant",
        "address1": "1470 S Virginia St",
        "city": "Reno",
        "state": "NV",
        "zip": "89502",
        "lat": "39.510017",
        "long": "-119.805054",
        "telephone": "(775) 329-9979",
        "tags": "Social,Food and Dining,Restaurants,Italian,Social,Food and Dining,Restaurants,American",
        "website": "http://lulous.restaurantwebexpert.com",
        "genre": "Italian,American,Contemporary,European,International",
        "hours": "Tue-Sat 5:00 PM-8:30 PM",
        "attire": "business casual"
    },
    {
        "id": "06e48e5a-6af2-4a04-97dd-fbf61ef46dd6",
        "name": "Byrd & Baldwin Bros Steakhouse",
        "address1": "116 Brooke Ave",
        "city": "Norfolk",
        "state": "VA",
        "zip": "23510",
        "lat": "36.848861",
        "long": "-76.291773",
        "telephone": "(757) 222-9191",
        "tags": "Social,Food and Dining,Restaurants",
        "website": "https://www.byrdbaldwin.com/",
        "genre": "Steak",
        "hours": "Mon-Thu 5:00 PM-9:30 PM; Fri-Sat 5:00 PM-10:30 PM; Sun 5:00 PM-8:30 PM",
        "attire": "business casual"
    },
    {
        "id": "b7f72b56-3c89-4d45-9d70-f88d0db62db1",
        "name": "Antoine's Restaurant",
        "address1": "1100 N Tuttle Ave",
        "city": "Sarasota",
        "state": "FL",
        "zip": "34237",
        "lat": "27.347534",
        "long": "-82.513303",
        "telephone": "(941) 331-1400",
        "tags": "Social,Food and Dining,Restaurants,French,Social,Food and Dining,Restaurants,Seafood,Social,Food and Dining,Restaurants,International",
        "website": "http://www.antoinessarasota.com",
        "genre": "European,French,Seafood,Belgian,Vegetarian",
        "hours": "Mon-Sat 5:00 PM-9:00 PM",
        "attire": "casual"
    },
    {
        "id": "eb749df5-4b5d-4a4b-aa0b-b1fb7f53b04d",
        "name": "The Capital Grille",
        "address1": "9101 International Dr",
        "city": "Orlando",
        "state": "FL",
        "zip": "32819",
        "lat": "28.430828",
        "long": "-81.470184",
        "telephone": "(407) 370-4392",
        "tags": "Social,Food and Dining,Restaurants,Steakhouses,Social,Food and Dining,Restaurants,American",
        "website": "http://www.thecapitalgrille.com",
        "genre": "Steak,American",
        "hours": "Mon-Thu 11:30 AM-10:00 PM; Fri 11:30 AM-11:00 PM; Sat 5:00 PM-11:00 PM; Sun 5:00 PM-10:00 PM",
        "attire": "business casual"
    }
  ]
}

export default fakeData