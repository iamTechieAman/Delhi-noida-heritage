import { Monument } from '../types';

export const delhiMonuments: Monument[] = [
  {
    id: "red-fort",
    name: "Red Fort (Lal Qila)",
    century: "17th Century",
    location: "Delhi",
    coordinates: "28.6558°N, 77.2408°E",
    address: "Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi 110006",
    shortDescription: "A UNESCO World Heritage Site, this massive red sandstone fort was built by Emperor Shah Jahan as the palace of his fortified capital Shahjahanabad.",
    longDescription: "The Red Fort, also known as Lal Qila, is a historic fort in the old Delhi area that served as the main residence of the Mughal Emperors. Built in 1639 by the fifth Mughal Emperor Shah Jahan as the palace of his fortified capital Shahjahanabad, the Red Fort is named for its massive enclosing walls of red sandstone. The architectural design of the fort represents the pinnacle of Mughal creativity, combining Persian, Timurid, and Hindu traditions. The fort complex houses several museums that display artifacts from the Mughal era. Every year on Independence Day (15 August), the Prime Minister of India hoists the national flag at the Red Fort and delivers a nationally broadcast speech from its ramparts.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Red_Fort%2C_Delhi_by_alexfurr.jpg",
    builtYear: "1639-1648",
    builtBy: "Emperor Shah Jahan",
    visitingHours: "9:30 AM - 4:30 PM (Closed on Mondays)",
    entryFee: "₹35 for Indians / ₹500 for Foreigners",
    bestTime: "October to March",
    visitDuration: "2-3 hours",
    photography: "Allowed (extra fee for video cameras)",
    unesco: true,
    history: "The Red Fort was built by Emperor Shah Jahan when he decided to shift his capital from Agra to Delhi. It served as the residence of the Mughal emperors for nearly 200 years until 1857. The fort witnessed the rise and fall of the mighty Mughal Empire, from its zenith during Shah Jahan's rule to its decline under later emperors.",
    historyTimeline: [
      {
        year: "1639",
        event: "Construction of the Red Fort began when Emperor Shah Jahan decided to shift his capital from Agra to Delhi."
      },
      {
        year: "1648",
        event: "Construction completed and Shah Jahan moved his capital to the newly built Shahjahanabad with the Red Fort as the imperial residence."
      },
      {
        year: "1857",
        event: "The last Mughal Emperor, Bahadur Shah Zafar, was removed from power by the British following the Indian Rebellion of 1857."
      }
    ],
    architecture: "The Red Fort represents the zenith of Mughal architectural brilliance. Built with red sandstone, the fort combines Persian, Timurid, and Hindu architectural elements. The innovative architectural style, referred to as the Shahjahani, was influenced by Mughal architectural traditions.",
    architecturalFeatures: [
      "Massive red sandstone walls rising 33 meters (108 ft) tall",
      "Lahori Gate, the main entrance and where the Prime Minister hoists the flag",
      "Diwan-i-Aam (Hall of Public Audience) with an intricately carved royal throne",
      "Diwan-i-Khas (Hall of Private Audience) with the famous inscription: 'If there is a paradise on earth, it is this, it is this, it is this'",
      "Rang Mahal (Palace of Colors), which housed the Emperor's wives and mistresses",
      "Nahr-i-Behisht (Stream of Paradise), a water channel running through the palace complex"
    ],
    architectureImage: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Delhi_fort.jpg",
    materialsUsed: "The fort is primarily constructed of red sandstone, though white marble was used for some structures within the fort complex, particularly those built during Shah Jahan's reign. The buildings feature extensive use of inlay work with precious and semi-precious stones.",
    gallery: [
    {
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Delhi_fort.jpg",
        alt: "Red Fort Walls"
    },
    {
        url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Red_Fort%2C_Delhi_by_alexfurr.jpg",
        alt: "Red Fort Main Entrance"
    },
    {
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Red_Fort_in_Delhi_03-2016_img1.jpg",
        alt: "Red Fort Interior"
    },
    {
        url:        "https://as2.ftcdn.net/v2/jpg/01/21/64/87/1000_F_121648793_oTT8ZudplhtBzKQBFtMPSCi63hRjffpK.jpg",
        alt: "Red Fort Courtyard"
    },
    {
        url: "https://www.goodfreephotos.com/albums/india/new-delhi/red-fort-aerial-view-in-delhi-india.jpg",
        alt: "Red Fort Architecture"
    }
],
    nearbyAttractions: [
      {
        name: "Jama Masjid",
        distance: "1.5 km",
        description: "One of India's largest mosques, also built by Shah Jahan",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Jama_Masjid_-_In_the_Noon.jpg/2560px-Jama_Masjid_-_In_the_Noon.jpg"
      },
      {
        name: "Chandni Chowk",
        distance: "1 km",
        description: "Historic market street with shops, food, and cultural experiences",
        imageUrl: "https://imgs.search.brave.com/YRcBLFLhT2ZISI0XNchcgWWaqA5EnuaSjxw-IeIp_eU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2JmLzk5/LzU4L2JmOTk1ODhj/NTlhY2JkOWRjYTUz/ODA3MGM3Y2UxZTcx/LmpwZw"
      },
      {
        name: "Raj Ghat",
        distance: "3 km",
        description: "Memorial dedicated to Mahatma Gandhi",
        imageUrl: "https://imgs.search.brave.com/41wYjSx5SfAicvaQKLqBiRQoWKT0L_N3hyfkd0wKFso/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzY2LzM3LzMy/LzM2MF9GXzI2NjM3/MzI5M190cWdSd0ZS/WVBYdDIyVVNZdUt1/a2Q0b1pORXVHNERu/bi5qcGc"
      },
      {
        name: "National Gandhi Museum",
        distance: "3.5 km",
        description: "Museum dedicated to the life and principles of Mahatma Gandhi",
        imageUrl: "https://media.gettyimages.com/id/924736628/photo/gandhi-smriti-formerly-known-as-birla-house-or-birla-bhavan-is-a-museum-dedicated-to-mahatma.jpg?s=612x612&w=0&k=20&c=FT2eFTib4gKMWEK4Oeedyga4evEzErT_O81xbuDOh8g="
      }
    ]
  },
  {
    id: "qutub-minar",
    name: "Qutub Minar",
    century: "12th Century",
    location: "Delhi",
    coordinates: "28.5244°N, 77.1852°E",
    address: "Mehrauli, New Delhi, Delhi 110030",
    shortDescription: "A UNESCO World Heritage Site, this 73-meter tall tower of victory was built in 1193 by Qutab-ud-din Aibak after the defeat of Delhi's last Hindu kingdom.",
    longDescription: "The Qutub Minar is a minaret and victory tower located in the Qutub complex in Delhi. At 73 meters, it is the tallest brick minaret in the world. Construction was started by Qutub-ud-din Aibak in 1193 and completed by his successor Iltutmish. The tower is made of red sandstone and marble, decorated with intricate carvings of verses from the Quran and various geometric and floral designs. The complex also includes the Iron Pillar of Delhi, which has withstood corrosion for over 1,600 years, demonstrating the high level of skill achieved by ancient Indian ironsmiths.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Qutb_Minar_2011.jpg",
    builtYear: "1193-1220",
    builtBy: "Qutub-ud-din Aibak and Iltutmish",
    visitingHours: "7:00 AM - 5:00 PM (Open all days)",
    entryFee: "₹35 for Indians / ₹550 for Foreigners",
    bestTime: "October to March",
    visitDuration: "1-2 hours",
    photography: "Allowed",
    unesco: true,
    history: "The Qutub Minar was built as a tower of victory to commemorate the Muslim conquest of Delhi by Qutub-ud-din Aibak, the founder of the Delhi Sultanate. It also served as a minaret for the muezzin to call the faithful to prayer. Over time, various rulers added to the tower, with Iltutmish adding three more stories and Firoz Shah Tughlaq adding the final story.",
    historyTimeline: [
      {
        year: "1193",
        event: "Construction began under Qutub-ud-din Aibak, using materials from 27 demolished Hindu and Jain temples."
      },
      {
        year: "1220",
        event: "Three more stories were added by Iltutmish, Aibak's successor."
      },
      {
        year: "1369",
        event: "The fifth and final story was added by Firoz Shah Tughlaq, rebuilding the top floors after lightning damage."
      }
    ],
    architecture: "The Qutub Minar is an excellent example of early Indo-Islamic architecture. The tower has five distinct stories, each marked by a projecting balcony that encircles the tower. The first three stories are made of red sandstone, while the fourth and fifth stories are of marble and sandstone.",
    architecturalFeatures: [
      "Five distinct stories marked by projecting balconies",
      "Intricate carvings featuring verses from the Quran",
      "Calligraphic inscriptions in Parso-Arabic and Nagari characters",
      "Geometric and floral designs reflecting Hindu and Islamic artistic influences",
      "Fluted columns and projecting balconies giving the tower its distinctive appearance",
      "The Iron Pillar in the complex, which has not rusted in over 1,600 years"
    ],
    architectureImage: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Qutb_Minar_2011.jpg",
    materialsUsed: "The minaret is constructed primarily of red sandstone, with the top stories incorporating white marble. The construction materials were sourced locally as well as repurposed from existing structures, including 27 Hindu and Jain temples that were demolished by Qutub-ud-din Aibak.",
   gallery: [
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b7/1f/31/qutab-minar.jpg?w=1100&amp;h=-1&amp;s=1",
    alt: "Qutub Minar Full View"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Qutb_Minar_2022.jpg",  // Close-up of Qutub Minar
    alt: "Qutub Minar Close-up"
  },
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/bf/41/8d/caption.jpg?w=1400&amp;h=800&amp;s=1",  // Qutub Complex
    alt: "Qutub Complex"
  },
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/bf/41/89/caption.jpg?w=1000&amp;h=-1&amp;s=1",  // Iron Pillar
    alt: "Iron Pillar"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Qutub_minar.JPG",  // Qutub Minar Carvings
    alt: "Qutub Minar Carvings"
  }
],
    nearbyAttractions: [
      {
        name: "Mehrauli Archaeological Park",
        distance: "0.5 km",
        description: "Home to over 100 historically significant monuments",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Rose_Garden%2C_Mehrauli_Archaeological_Park.JPG"
      },
      {
        name: "Jamali Kamali Mosque",
        distance: "1 km",
        description: "A stunning Mughal mosque and tomb from the 16th century",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Jamali_Kamali_mosque1.jpg"
      },
      {
        name: "Garden of Five Senses",
        distance: "3 km",
        description: "A park designed to stimulate the five senses with various attractions",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Sun_clock_inside_the_Garden_of_Five_Senses.jpg"
      },
      {
        name: "Saket Mall Complex",
        distance: "4 km",
        description: "Modern shopping malls with entertainment options",
        imageUrl: "https://images.pexels.com/photos/1350239/pexels-photo-1350239.jpeg"
      }
    ]
  },
  {
    id: "humayuns-tomb",
    name: "Humayun's Tomb",
    century: "16th Century",
    location: "Delhi",
    coordinates: "28.5933°N, 77.2506°E",
    address: "Mathura Road, Opposite Nizamuddin Mosque, New Delhi, Delhi 110013",
    shortDescription: "A UNESCO World Heritage Site, this grand mausoleum was built by Emperor Humayun's wife Bega Begum in 1569-70, and was the first garden-tomb on the Indian subcontinent.",
    longDescription: "Humayun's Tomb is the tomb of the Mughal Emperor Humayun in Delhi. The tomb was commissioned by Humayun's first wife and chief consort, Empress Bega Begum (also known as Haji Begum), in 1569-70, and designed by Mirak Mirza Ghiyas and his son, Persian architects chosen by the empress. It was the first garden-tomb on the Indian subcontinent and inspired several major architectural innovations, culminating in the construction of the Taj Mahal. The tomb has been described as 'the dormitory of the Mughals' as besides Humayun, the complex also houses the graves of his wife, Empress Bega Begum, and numerous other subsequent Mughals, including Emperor Jahandar Shah, Prince Dara Shikoh, and Emperor Muhammad Shah Rangila.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/11/Front_View_of_Humayun%27s_tomb_01.jpg",
    builtYear: "1569-1572",
    builtBy: "Bega Begum (Humayun's wife)",
    visitingHours: "6:00 AM - 6:00 PM (Open all days)",
    entryFee: "₹35 for Indians / ₹550 for Foreigners",
    bestTime: "October to March",
    visitDuration: "1-2 hours",
    photography: "Allowed",
    unesco: true,
    history: "Humayun's Tomb was commissioned by Empress Bega Begum in 1569, nine years after the death of her husband, Emperor Humayun. The construction was completed in 1572. The tomb established a standard for Mughal mausoleums that reached its zenith with the Taj Mahal, built by Humayun's great-grandson, Shah Jahan.",
    historyTimeline: [
      {
        year: "1556",
        event: "Emperor Humayun died after falling from the stairs of his library."
      },
      {
        year: "1569",
        event: "Empress Bega Begum commissioned the construction of the tomb."
      },
      {
        year: "1572",
        event: "Construction of the tomb was completed, setting a precedent for future Mughal architecture."
      }
    ],
    architecture: "Humayun's Tomb represents a leap in Mughal architecture, combining Persian influences with indigenous architectural styles. It introduced the concept of the garden tomb (Char Bagh) to India and established a template that culminated in the Taj Mahal.",
    architecturalFeatures: [
      "Char Bagh garden layout with pools connected by channels representing the four rivers of Paradise",
      "Red sandstone double-storeyed structure on a high platform",
      "Central dome made of white marble",
      "Combination of Persian and Indian architectural elements",
      "Intricate geometric patterns and inlay work",
      "Chhatris (elevated, dome-shaped pavilions) on the roof"
    ],
    architectureImage: "https://upload.wikimedia.org/wikipedia/commons/1/11/Front_View_of_Humayun%27s_tomb_01.jpg",
    materialsUsed: "The main structure is built with red sandstone, while the dome is made of white marble. The contrast between these materials became a hallmark of Mughal architecture. The structure also features intricate inlay work and carvings in both materials.",
  gallery: [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/1/11/Front_View_of_Humayun%27s_tomb_01.jpg",
    alt: "Humayun's Tomb Front View"
  },
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/c9/39/b3/humayun-s-tomb.jpg?w=1800&amp;h=1000&amp;s=1",
    alt: "Humayun's Tomb with Gardens"
  },
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/b3/94/52/caption.jpg?w=1400&amp;h=-1&amp;s=1",
    alt: "Intricate Details"
  },
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/b6/56/41/caption.jpg?w=1400&amp;h=800&amp;s=1",
    alt: "Entrance Gateway"
  },
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/b3/94/46/caption.jpg?w=1400&amp;h=-1&amp;s=1",
    alt: "Garden Pathways"
  }

 ],
    nearbyAttractions: [
      {
        name: "Nizamuddin Dargah",
        distance: "1 km",
        description: "Shrine of the Sufi saint Nizamuddin Auliya, famous for qawwali performances",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/59/Nizamuddin_Dargah_and_Jamaat_Khana_Masjid%2C_Delhi.jpg"
      },
      {
        name: "Sunder Nursery",
        distance: "0.5 km",
        description: "A 16th-century heritage park complex adjacent to Humayun's Tomb",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Sunder_Nursery_Sep-2019.jpg"
      },
      {
        name: "Isa Khan's Tomb",
        distance: "0.2 km",
        description: "An early 16th-century tomb within the Humayun's Tomb complex",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Isha_Khan_Niyazi%27s_tomb_-_Delhi_297_HT.jpg"
      },
      {
        name: "Purana Qila",
        distance: "3 km",
        description: "Ancient fort believed to be the site of the legendary city of Indraprastha",
        imageUrl: "https://images.pexels.com/photos/13229634/pexels-photo-13229634.jpeg"
      }
    ]
  },
  {
    id: "india-gate",
    name: "India Gate",
    century: "20th Century",
    location: "Delhi",
    coordinates: "28.6129°N, 77.2294°E",
    address: "Rajpath, India Gate, New Delhi, Delhi 110001",
    shortDescription: "A war memorial dedicated to the soldiers of the British Indian Army who died in the First World War and the Third Anglo-Afghan War.",
    longDescription: "India Gate, officially known as the All India War Memorial, is a prominent landmark in Delhi. It was designed by Sir Edwin Lutyens and stands as a memorial to the Indian soldiers who died in the First World War and the Third Anglo-Afghan War. The names of over 13,000 soldiers are inscribed on its walls. Beneath the arch is the Amar Jawan Jyoti (Flame of the Immortal Soldier), added after India's victory in the 1971 war, which burns continuously to remind the nation of soldiers who laid down their lives in the Indo-Pakistan War. The structure is surrounded by lush green lawns that are a popular picnic spot for locals and tourists alike.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/99/India_Gate_on_the_evening_of_77th_Independence_day.jpg",
    builtYear: "1921-1931",
    builtBy: "Sir Edwin Lutyens",
    visitingHours: "24 hours (Open all days)",
    entryFee: "Free",
    bestTime: "Evening hours for the lighting",
    visitDuration: "30 minutes - 1 hour",
    photography: "Allowed",
    unesco: false,
    history: "India Gate was designed by Sir Edwin Lutyens as part of the plan for New Delhi. It was built to honor the soldiers of the British Indian Army who died during the First World War and the Third Anglo-Afghan War. After India's independence, it has become a significant national monument, symbolizing India's sacrifices in various wars.",
    historyTimeline: [
      {
        year: "1921",
        event: "Construction began as a memorial to the Indian soldiers who died in World War I."
      },
      {
        year: "1931",
        event: "Construction completed and the memorial was inaugurated."
      },
      {
        year: "1972",
        event: "Amar Jawan Jyoti (Flame of the Immortal Soldier) was added following India's victory in the 1971 Indo-Pakistan War."
      }
    ],
    architecture: "India Gate is a magnificent arch-style war memorial inspired by the Arc de Triomphe in Paris, though significantly different in design. It stands 42 meters tall and was designed by the prominent British architect Sir Edwin Lutyens, who was responsible for much of New Delhi's architectural plan.",
    architecturalFeatures: [
      "Triumphal arch design made of red and pale sandstone",
      "42 meters in height and 9.1 meters in width",
      "Inscriptions of the names of over 13,000 soldiers on the walls",
      "Amar Jawan Jyoti - an eternal flame burning beneath the arch",
      "Royal insignia and the INDIA inscription at the top",
      "Surrounding gardens and fountains designed as part of the ceremonial boulevard"
    ],
    architectureImage: "https://upload.wikimedia.org/wikipedia/commons/9/99/India_Gate_on_the_evening_of_77th_Independence_day.jpg",
    materialsUsed: "India Gate is constructed primarily from red and pale sandstone and granite. The stone used was sourced from various parts of India, reflecting the national character of the monument. The structure exemplifies the architectural style that Lutyens developed for New Delhi, combining classical European elements with Indian motifs.",
  gallery: [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/1/17/India_Gate_from_Rajpath.jpg",
    alt: "India Gate from Rajpath"
  },
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/a0/cd/c7/india-gate.jpg?w=1100&amp;h=-1&amp;s=1",
    alt: "India Gate Front View"
  },
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/56/05/7d/india-gate.jpg?w=1000&amp;h=-1&amp;s=1",
    alt: "India Gate at Night"
  },
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/56/05/c0/india-gate.jpg?w=1000&amp;h=-1&amp;s=1",
    alt: "India Gate with Lawns"
  },
  {
    url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/57/35/05/20140710-201053-largejpg.jpg?w=800&amp;h=-1&amp;s=1",
    alt: "Amar Jawan Jyoti"
  },
  {
    url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/56/05/96/india-gate.jpg?w=1000&amp;h=-1&amp;s=1",
    alt: "Rajpath View"
  }



    ],
    nearbyAttractions: [
      {
        name: "Rashtrapati Bhavan",
        distance: "3 km",
        description: "Official residence of the President of India",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Rashtrapati_Bhavan_1.jpg"
      },
      {
        name: "National War Memorial",
        distance: "0.5 km",
        description: "Memorial honoring Indian soldiers who died in armed conflicts after independence",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/17/National_War_Memorial_on_the_21st_anniversary_of_Kargil_Vijay_Diwas%2C_2020.jpg"
      },
      {
        name: "National Gallery of Modern Art",
        distance: "2 km",
        description: "Houses a collection of modern and contemporary Indian art",
        imageUrl: "https://i0.wp.com/thewanderingcore.com/wp-content/uploads/2017/08/8e1c4910-db22-47cc-9fb8-3dba5192b7f1-29864-000014c329dbd43f.jpg?resize=750%2C565&amp;ssl=1"
      },
      {
        name: "Kartavya Path (formerly Rajpath)",
        distance: "0.1 km",
        description: "Ceremonial boulevard where Republic Day parade takes place",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/59/Kartavya_Path_in_the_evening_in_New_Delhi_06.jpg"
      }
    ]
  },
  {
    id: "jama-masjid",
    name: "Jama Masjid",
    century: "17th Century",
    location: "Delhi",
    coordinates: "28.6500°N, 77.2333°E",
    address: "Jama Masjid Road, Chandni Chowk, New Delhi, Delhi 110006",
    shortDescription: "One of India's largest mosques, built by Emperor Shah Jahan between 1644 and 1656. It can accommodate over 25,000 worshippers at once.",
    longDescription: "Jama Masjid, also known as Masjid-i Jahān-Numā, is one of the largest mosques in India. Built by Mughal Emperor Shah Jahan between 1644 and 1656, the mosque is a magnificent example of Mughal architecture. The mosque features three massive gates, four towers, and two minarets constructed of strips of red sandstone and white marble. The courtyard can accommodate more than 25,000 worshippers. The eastern gate of the mosque was historically reserved for the emperor and features a series of steps now leading up from the street. Visitors must remove their shoes and women must cover their heads when entering the mosque as a sign of respect.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Jama_Masjid_-_In_the_Noon.jpg",
    builtYear: "1644-1656",
    builtBy: "Emperor Shah Jahan",
    visitingHours: "7:00 AM - 12:00 PM, 1:30 PM - 6:30 PM (Closed during prayer times)",
    entryFee: "Free (Camera fee: ₹300)",
    bestTime: "Early morning or late afternoon",
    visitDuration: "1-2 hours",
    photography: "Allowed with fee",
    unesco: false,
    history: "Jama Masjid was built by Emperor Shah Jahan, the same emperor who built the Taj Mahal and the Red Fort. It was the largest mosque in India for over 300 years and was the final architectural extravagance of Shah Jahan. The construction began in 1644 and was completed in 1656. The mosque has witnessed significant historical events, including being a focal point during the 1857 rebellion against British rule.",
    historyTimeline: [
      {
        year: "1644",
        event: "Construction began under Emperor Shah Jahan's orders."
      },
      {
        year: "1656",
        event: "Construction completed at a cost of 1 million rupees."
      },
      {
        year: "1857",
        event: "The mosque became a gathering place for rebels during the Indian Rebellion against British rule."
      }
    ],
    architecture: "Jama Masjid is a masterpiece of Mughal architecture, combining Persian, Islamic, and Indian architectural styles. The mosque is built on a high platform accessed by flights of steps, with a large courtyard capable of accommodating thousands of worshippers.",
    architecturalFeatures: [
      "Three massive gates made of red sandstone and white marble",
      "Two 40-meter-high minarets constructed of red sandstone and white marble strips",
      "Large courtyard that can accommodate over 25,000 people",
      "Prayer hall with eleven arched entrances",
      "Three domes with alternating stripes of black and white marble",
      "Intricate carvings and calligraphy featuring verses from the Quran"
    ],
    architectureImage: "https://images.pexels.com/photos/5560524/pexels-photo-5560524.jpeg",
    materialsUsed: "The mosque is primarily constructed of red sandstone with extensive use of white marble for the domes and decorative elements. Over 5,000 craftsmen worked on the construction, utilizing traditional Mughal building techniques including the use of iron clamps and mortar, as well as expert stone carving for the intricate designs.",
    gallery: [
      {
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/d0/27/fe/shot-in-august-2013-on.jpg?w=1100&amp;h=600&amp;s=1",
        alt: "Jama Masjid Front View"
      },
      {
        url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/48/a9/71/friday-mosque-jama-masjid.jpg?w=500&amp;h=-1&amp;s=1",
        alt: "Jama Masjid Courtyard"
      },
      {
        url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/38/54/10/india-cliccare-sulla.jpg?w=1000&amp;h=-1&amp;s=1",
        alt: "Jama Masjid Domes"
      },
      {
        url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/85/54/b3/jama-mosque-located-at.jpg?w=600&amp;h=-1&amp;s=1",
        alt: "Jama Masjid Minarets"
      },
      {
        url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/d8/d9/85/sicht-vom-40m-hohen-minarett.jpg?w=1000&amp;h=-1&amp;s=1",
        alt: "Prayer Hall"
      }
    ],
    nearbyAttractions: [
      {
        name: "Red Fort",
        distance: "1.5 km",
        description: "UNESCO World Heritage Site and former residence of Mughal Emperors",
        imageUrl:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/08/c8/81/27.jpg"
      },
      {
        name: "Chandni Chowk",
        distance: "0.5 km",
        description: "One of the oldest and busiest markets in Old Delhi",
        imageUrl: "https://images.pexels.com/photos/5560537/pexels-photo-5560537.jpeg"
      },
      {
        name: "Khari Baoli",
        distance: "1 km",
        description: "Asia's largest spice market",
        imageUrl: "https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg"
      },
      {
        name: "Meena Bazaar",
        distance: "1.5 km",
        description: "Historic market dating back to the Mughal era",
        imageUrl: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg"
      }
    ]
  },
  {
    id: "akshardham-temple",
    name: "Akshardham Temple",
    century: "21st Century",
    location: "Delhi",
    coordinates: "28.6227°N, 77.2778°E",
    address: "Noida Mor, Pandav Nagar, New Delhi, Delhi 110092",
    shortDescription: "A relatively modern Hindu temple complex showcasing millennia of traditional Hindu and Indian culture, spirituality, and architecture.",
    longDescription: "Swaminarayan Akshardham is a Hindu temple complex in Delhi, India. The complex displays millennia of traditional Hindu and Indian culture, spirituality, and architecture. Inspired by Yogiji Maharaj and created by Pramukh Swami Maharaj, it was constructed by the BAPS foundation and officially opened on 6 November 2005. The temple at the center of the complex was built according to the Vastu shastra and Pancharatra shastra. The complex features an Abhishek Mandap, Sahaj Anand water show, a thematic garden, and three exhibitions: Sahajanand Darshan (Hall of Values), Neelkanth Darshan (theater), and Sanskruti Darshan (cultural boat ride). The temple is named after the deity Swaminarayan and is one of the largest Hindu temples in the world.",
    imageUrl: "https://pixahive.com/wp-content/uploads/2020/09/Swaminarayan-Akshardham-Temple-in-Delhi-89289-pixahive.jpg",
    builtYear: "2000-2005",
    builtBy: "BAPS Swaminarayan Sanstha",
    visitingHours: "9:30 AM - 6:30 PM (Closed on Mondays)",
    entryFee: "Free (exhibitions: ₹170)",
    bestTime: "Evening for the light and water show",
    visitDuration: "3-4 hours",
    photography: "Not allowed inside",
    unesco: false,
    history: "Akshardham Temple was inspired by Yogiji Maharaj, the spiritual leader of the BAPS Swaminarayan Sanstha, who expressed his wish for a grand temple on the banks of the Yamuna River. His successor, Pramukh Swami Maharaj, turned this vision into reality. The construction began in 2000 and was completed in 2005, involving over 11,000 artisans and volunteers.",
    historyTimeline: [
      {
        year: "1968",
        event: "Yogiji Maharaj, the spiritual leader of BAPS, envisioned a grand temple on the banks of the Yamuna."
      },
      {
        year: "2000",
        event: "Construction began under the guidance of Pramukh Swami Maharaj."
      },
      {
        year: "2005",
        event: "The temple complex was inaugurated on November 6, after five years of construction."
      }
    ],
    architecture: "Akshardham Temple is built in accordance with ancient Vastu Shastra and Pancharatra Shastra texts. The temple is a remarkable blend of traditional Indian temple architecture with modern engineering techniques. It is built entirely of pink sandstone and white marble, without the use of structural steel.",
    architecturalFeatures: [
      "Main monument built of pink sandstone and white marble, standing 141 feet high",
      "9 ornate domes, 234 ornately carved pillars, and over 20,000 carved figurines",
      "Gajendra Pith - a plinth featuring 148 life-sized elephants",
      "Intricate carvings depicting deities, dancers, musicians, flora, and fauna",
      "Musical fountain that showcases the cycle of life in Indian philosophy",
      "Thematic garden with bronze sculptures depicting Indian values"
    ],
    architectureImage: "https://pixahive.com/wp-content/uploads/2020/09/Swaminarayan-Akshardham-Temple-in-Delhi-89289-pixahive.jpg",
    materialsUsed: "The temple is constructed primarily of pink sandstone from Rajasthan and white Carrara marble from Italy. No steel or concrete was used in the main monument. Over 12,000 tons of stone were carved by thousands of artisans using traditional techniques. The entire structure sits on a foundation of high-density concrete designed to last for thousands of years.",
    gallery: [
      {
        url: "https://pixahive.com/wp-content/uploads/2020/09/Swaminarayan-Akshardham-Temple-in-Delhi-89289-pixahive.jpg",
        alt: "Akshardham Temple Front View"
      },
      {
        url: "https://images.pexels.com/photos/10198000/pexels-photo-10198000.jpeg",
        alt: "Akshardham Temple Domes"
      },
      {
        url: "https://images.pexels.com/photos/10198001/pexels-photo-10198001.jpeg",
        alt: "Carved Pillars"
      },
      {
        url: "https://images.pexels.com/photos/10198002/pexels-photo-10198002.jpeg",
        alt: "Musical Fountain"
      },
      {
        url: "https://images.pexels.com/photos/10198003/pexels-photo-10198003.jpeg",
        alt: "Thematic Garden"
      }
    ],
    nearbyAttractions: [
      {
        name: "Mayur Vihar",
        distance: "2 km",
        description: "Residential and commercial area with several parks and markets",
        imageUrl: "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg"
      },
      {
        name: "Commonwealth Games Village",
        distance: "3 km",
        description: "Built for the 2010 Commonwealth Games, now a residential complex",
        imageUrl: "https://images.pexels.com/photos/5961231/pexels-photo-5961231.jpeg"
      },
      {
        name: "Yamuna River Front",
        distance: "1 km",
        description: "Riverside area offering views of the Yamuna River",
        imageUrl: "https://images.pexels.com/photos/18465169/pexels-photo-18465169.jpeg"
      },
      {
        name: "Indraprastha Park",
        distance: "4 km",
        description: "Large urban park with walking trails and recreational areas",
        imageUrl: "https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg"
      }
    ]
  },
];

export const noidaMonuments: Monument[] = [
  {
    id: "okhla-barrage",
    name: "Okhla Barrage",
    century: "19th Century",
    location: "Noida",
    coordinates: "28.5475°N, 77.3033°E",
    address: "Okhla Head, Noida, Uttar Pradesh 201301",
    shortDescription: "A barrage on the Yamuna River that forms a crucial part of Delhi's water management system and serves as an important bird sanctuary.",
    longDescription: "The Okhla Barrage is a barrage on the Yamuna River, located on the Delhi-Noida border. Built in 1874 during the British colonial period, it was primarily constructed for irrigation purposes but now serves multiple functions including water supply and bird conservation. The area around the barrage has developed into the Okhla Bird Sanctuary, an important bird watching site that attracts migratory birds from Central Asia, Siberia, and Europe during the winter months. The sanctuary is home to over 300 bird species, making it a critical ecological zone in an otherwise highly urbanized region. The barrage itself is an important historical structure that has played a significant role in the development of the region.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Agra_canal_headworks1871a.jpg",
    builtYear: "1874",
    builtBy: "British Colonial Government",
    visitingHours: "7:00 AM - 5:00 PM (Open all days)",
    entryFee: "₹30 for Indians / ₹350 for Foreigners",
    bestTime: "November to March for migratory birds",
    visitDuration: "2-3 hours",
    photography: "Allowed",
    unesco: false,
    history: "The Okhla Barrage was constructed during the British colonial period as part of irrigation works along the Yamuna River. Over time, it became a crucial component of Delhi's water management system. In the 1990s, the area around the barrage was officially designated as the Okhla Bird Sanctuary, recognizing its ecological importance as a wetland habitat for numerous bird species.",
    historyTimeline: [
      {
        year: "1874",
        event: "Construction of the Okhla Barrage by the British colonial government for irrigation purposes."
      },
      {
        year: "1990",
        event: "The area around the barrage was officially declared a bird sanctuary by the Uttar Pradesh government."
      },
      {
        year: "2005",
        event: "Major renovation and strengthening of the barrage was undertaken to enhance its water management capabilities."
      }
    ],
    architecture: "The Okhla Barrage is primarily a functional structure designed for water management rather than architectural splendor. However, its design represents colonial-era engineering and has historical significance as one of the early modern infrastructure projects in the region.",
    architecturalFeatures: [
      "Masonry and concrete structure spanning the width of the Yamuna River",
      "Gates for controlling water flow",
      "Sluiceways for irrigation channels",
      "Viewing platforms added in recent years for bird watching",
      "Observation towers for bird sanctuary management",
      "Walkways along parts of the barrage"
    ],
    architectureImage: "https://images.pexels.com/photos/2479312/pexels-photo-2479312.jpeg",
    materialsUsed: "The barrage is constructed primarily of stone masonry and concrete, with metal gates and mechanisms for water control. The original construction used techniques typical of 19th-century colonial engineering, with later renovations incorporating modern materials while preserving the historical structure.",
    gallery: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Agra_canal_headworks1871a.jpg",
        alt: "Okhla Barrage Overview"
      },
      {
        url: "https://images.pexels.com/photos/2479312/pexels-photo-2479312.jpeg",
        alt: "Water Flow at Barrage"
      },
      {
        url: "https://images.pexels.com/photos/16796629/pexels-photo-16796629.jpeg",
        alt: "Migratory Birds at Sanctuary"
      },
      {
        url: "https://images.pexels.com/photos/6992/forest-trees-northwestisbest-exploress.jpg",
        alt: "Sanctuary Greenery"
      },
      {
        url: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
        alt: "Bird Watching Area"
      }
    ],
    nearbyAttractions: [
      {
        name: "Kalindi Kunj Park",
        distance: "1.5 km",
        description: "Sprawling park with fountains and walking paths",
        imageUrl: "https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg"
      },
      {
        name: "Jamia Millia Islamia University",
        distance: "3 km",
        description: "Prestigious university with notable architecture",
        imageUrl: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg"
      },
      {
        name: "Noida Sector 15 Market",
        distance: "4 km",
        description: "Local shopping area with restaurants and shops",
        imageUrl: "https://images.pexels.com/photos/1350239/pexels-photo-1350239.jpeg"
      },
      {
        name: "Shani Temple",
        distance: "2.5 km",
        description: "Temple dedicated to Saturn (Shani) with unique architecture",
        imageUrl: "https://images.pexels.com/photos/784365/pexels-photo-784365.jpeg"
      }
    ]
  },
  {
    id: "dadri-fort",
    name: "Dadri Fort",
    century: "16th Century",
    location: "Noida",
    coordinates: "28.5564°N, 77.5542°E",
    address: "Dadri, Greater Noida, Uttar Pradesh 203207",
    shortDescription: "A historical fort in Greater Noida area with connections to the Mughal era, now partially in ruins but still an important historical landmark.",
    longDescription: "Dadri Fort, located in the Greater Noida region, is a historical structure dating back to the Mughal period. Though much of the fort lies in ruins today, it remains an important historical landmark that tells the story of the region's past. The fort was strategically located on ancient trade routes and controlled the surrounding agricultural lands. The remaining structures include fragments of walls, gateways, and some internal structures that hint at its former grandeur. Local legends associate the fort with various historical figures, including connections to the later Mughal period. Despite its deteriorated condition, efforts are being made to document and preserve this important piece of regional heritage.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/26/Dadri_Railway_Station%2C_2011.jpg",
    builtYear: "circa 16th century",
    builtBy: "Mughal administrators",
    visitingHours: "Sunrise to Sunset (informal)",
    entryFee: "Free",
    bestTime: "October to March",
    visitDuration: "1 hour",
    photography: "Allowed",
    unesco: false,
    history: "Dadri Fort has a complex history tied to the broader historical developments in the Delhi-NCR region. While specific records about its construction are limited, it is believed to have been built during the Mughal period as part of their network of administrative centers. The fort witnessed the region's transition through various periods of history, including the decline of the Mughal Empire, the rise of local powers, and eventually the British colonial period.",
    historyTimeline: [
      {
        year: "16th century",
        event: "Believed to have been constructed during the height of Mughal power in the region."
      },
      {
        year: "18th century",
        event: "Likely served as a regional administrative center during the later Mughal period."
      },
      {
        year: "19th century",
        event: "Gradually fell into disuse with changing political landscapes and administrative systems."
      }
    ],
    architecture: "Dadri Fort represents typical Mughal-era fort architecture on a regional scale. While not as grand as imperial Mughal structures, it showcases the practical military and administrative architecture of the period. Its current ruined state offers glimpses into construction techniques and spatial organization of regional forts.",
    architecturalFeatures: [
      "Remnants of thick defensive walls made of local materials",
      "Gateway structures with typical Mughal arches",
      "Fragments of interior courtyards and administrative buildings",
      "Evidence of bastions at strategic points",
      "Local adaptations of Mughal architectural principles",
      "Water storage systems typical of the period"
    ],
    architectureImage: "https://images.pexels.com/photos/3214995/pexels-photo-3214995.jpeg",
    materialsUsed: "The fort was primarily constructed using locally available materials including stone, brick, and lime mortar. The construction techniques reflect a combination of Mughal building practices adapted to local conditions and available materials. Evidence suggests the use of both carved stone elements for important features and brick masonry for bulk construction.",
    gallery: [
      {
        url: "https://images.pexels.com/photos/3329292/pexels-photo-3329292.jpeg",
        alt: "Dadri Fort Ruins"
      },
      {
        url: "https://images.pexels.com/photos/3214995/pexels-photo-3214995.jpeg",
        alt: "Remaining Structures"
      },
      {
        url: "https://images.pexels.com/photos/4175241/pexels-photo-4175241.jpeg",
        alt: "Ancient Gateway"
      },
      {
        url: "https://images.pexels.com/photos/6287545/pexels-photo-6287545.jpeg",
        alt: "Fort Walls"
      },
      {
        url: "https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg",
        alt: "Historical Artifacts"
      }
    ],
    nearbyAttractions: [
      {
        name: "Bisrakh Village",
        distance: "15 km",
        description: "Village associated with Ravana from the Ramayana",
        imageUrl: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg"
      },
      {
        name: "Shahberi Ancient Mound",
        distance: "8 km",
        description: "Archaeological site with potential connections to ancient cultures",
        imageUrl: "https://images.pexels.com/photos/5793953/pexels-photo-5793953.jpeg"
      },
      {
        name: "NTPC Dadri Power Plant",
        distance: "5 km",
        description: "One of India's largest power generation facilities (industrial tourism)",
        imageUrl: "https://images.pexels.com/photos/2805464/pexels-photo-2805464.jpeg"
      },
      {
        name: "Sharda Canal",
        distance: "7 km",
        description: "Historic canal system with colonial engineering heritage",
        imageUrl: "https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg"
      }
    ]
  },
  {
    id: "sharda-temple",
    name: "Ancient Sharda Temple",
    century: "18th Century",
    location: "Noida",
    coordinates: "28.5741°N, 77.3368°E",
    address: "Sector 41, Noida, Uttar Pradesh 201303",
    shortDescription: "A historic temple dedicated to Goddess Saraswati (Sharda) that provides insights into the religious practices and architectural styles of pre-modern Noida region.",
    longDescription: "The Ancient Sharda Temple is one of the oldest religious structures in the Noida region, dedicated to Goddess Saraswati, who is also known as Sharda. This temple represents the historical continuity of religious practices in the area despite urban development. Built primarily of stone and brick, the temple showcases architectural elements typical of the regional temple-building tradition of the 18th century. Though relatively modest in scale compared to grand imperial structures, it holds significant cultural and historical value for understanding the region's past. The temple complex has undergone several renovations over time, but efforts have been made to preserve its original character. It continues to be an active place of worship while also serving as a reminder of Noida's pre-modern heritage.",
    imageUrl: "https://images.pexels.com/photos/784364/pexels-photo-784364.jpeg",
    builtYear: "circa 1750-1800",
    builtBy: "Local community",
    visitingHours: "6:00 AM - 8:00 PM (Open all days)",
    entryFee: "Free",
    bestTime: "Morning or evening aarti (prayer) times",
    visitDuration: "30 minutes - 1 hour",
    photography: "Allowed (restricted during ceremonies)",
    unesco: false,
    history: "The Ancient Sharda Temple has stood as a center of religious and cultural activity in the region for over two centuries. While exact records of its founding are limited, oral traditions and architectural evidence place its construction in the latter half of the 18th century. The temple has witnessed the transformation of the surrounding area from rural settlements to one of India's most rapidly developing urban centers.",
    historyTimeline: [
      {
        year: "c. 1750-1800",
        event: "Original temple structure believed to have been constructed by local patrons."
      },
      {
        year: "Mid-19th century",
        event: "First significant renovation recorded, expanding the temple complex."
      },
      {
        year: "1990s",
        event: "Conservation efforts initiated to preserve the temple as a heritage structure amid Noida's rapid development."
      }
    ],
    architecture: "The Ancient Sharda Temple represents regional temple architecture of North India from the 18th century. While modest compared to grand imperial structures, it showcases the adaptation of classical temple designs to local tastes, materials, and building techniques. The temple follows the traditional North Indian Nagara style with regional variations.",
    architecturalFeatures: [
      "Central sanctum (garbhagriha) housing the deity image",
      "Mandapa (prayer hall) with carved pillars",
      "Shikhara (spire) above the sanctum in the North Indian style",
      "Stone threshold and doorframe with traditional motifs",
      "Combination of stone and brick construction",
      "Later additions including boundary walls and auxiliary shrines"
    ],
    architectureImage: "https://images.pexels.com/photos/784365/pexels-photo-784365.jpeg",
    materialsUsed: "The temple is primarily constructed of locally quarried stone and handmade bricks, with lime mortar used as binding material. The sanctum and main structural elements are made of stone, while secondary structures utilize brick. Some decorative elements show evidence of skilled stone carving, particularly around the entrance and on the columns of the mandapa (prayer hall).",
    gallery: [
      {
        url: "https://images.pexels.com/photos/784364/pexels-photo-784364.jpeg",
        alt: "Sharda Temple Entrance"
      },
      {
        url: "https://images.pexels.com/photos/784365/pexels-photo-784365.jpeg",
        alt: "Temple Shikhara"
      },
      {
        url: "https://images.pexels.com/photos/6893804/pexels-photo-6893804.jpeg",
        alt: "Inner Sanctum"
      },
      {
        url: "https://images.pexels.com/photos/6044219/pexels-photo-6044219.jpeg",
        alt: "Temple Carvings"
      },
      {
        url: "https://images.pexels.com/photos/11835765/pexels-photo-11835765.jpeg",
        alt: "Temple Complex"
      }
    ],
    nearbyAttractions: [
      {
        name: "Sector 41 Park",
        distance: "0.5 km",
        description: "Well-maintained urban park with walking paths",
        imageUrl: "https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg"
      },
      {
        name: "Noida Sector 18 Market",
        distance: "5 km",
        description: "Popular shopping and entertainment hub",
        imageUrl: "https://images.pexels.com/photos/1350239/pexels-photo-1350239.jpeg"
      },
      {
        name: "Brahmaputra Market",
        distance: "2 km",
        description: "Local market with traditional goods and eateries",
        imageUrl: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg"
      },
      {
        name: "Sai Temple",
        distance: "3 km",
        description: "Modern temple dedicated to Sai Baba",
        imageUrl: "https://images.pexels.com/photos/5529605/pexels-photo-5529605.jpeg"
      }
    ]
  },
  {
    id: "kailash-temple",
    name: "Kailash Temple Dankaur",
    century: "19th Century",
    location: "Noida",
    coordinates: "28.3467°N, 77.5525°E",
    address: "Dankaur, Greater Noida, Uttar Pradesh 203201",
    shortDescription: "A historic Shiva temple with a traditional North Indian architectural style, known for its spiritual significance in the Greater Noida region.",
    longDescription: "The Kailash Temple in Dankaur is an important religious and historical landmark in the Greater Noida region. Dedicated to Lord Shiva, this 19th-century temple is named after Mount Kailash, the mythological abode of Shiva. The temple follows traditional North Indian temple architecture with a prominent shikhara (spire) and intricate stone carvings. Built during a period of revival of temple construction in the region, it represents the continuing tradition of Hindu sacred architecture. The temple remains an active center of worship, particularly during Mahashivratri when devotees gather in large numbers. Despite the rapid urbanization of the surrounding areas, the temple maintains its historical character and serves as a connection to the region's cultural heritage.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/fc/Kailash_temple_%28Ellora_cave_no_15%29_at_Verul.png",
    builtYear: "circa 1850",
    builtBy: "Local rulers and community",
    visitingHours: "5:00 AM - 9:00 PM (Open all days)",
    entryFee: "Free",
    bestTime: "Morning or during Mahashivratri festival",
    visitDuration: "30 minutes - 1 hour",
    photography: "Allowed (restricted during ceremonies)",
    unesco: false,
    history: "The Kailash Temple dates back to the mid-19th century when there was a revival of temple construction in the region under local patronage. While not an imperial commission, the temple represents the continuing tradition of religious architecture and the importance of local sacred spaces. Throughout its history, the temple has served as a spiritual and community center for the surrounding villages.",
    historyTimeline: [
      {
        year: "c. 1850",
        event: "Construction of the temple under local patronage."
      },
      {
        year: "Early 20th century",
        event: "Addition of auxiliary structures and expansion of the temple complex."
      },
      {
        year: "1980s-2000s",
        event: "Preservation efforts as urbanization began to transform the surrounding rural landscape."
      }
    ],
    architecture: "The Kailash Temple follows the Nagara style of North Indian temple architecture, characterized by its curvilinear shikhara (tower) over the sanctum. The temple demonstrates how traditional temple architecture continued to be practiced in regional contexts through the 19th century, adapting classical forms to local needs and materials.",
    architecturalFeatures: [
      "Central sanctum with a lingam (symbolic representation of Shiva)",
      "Curvilinear shikhara (spire) with traditional amalaka and kalasha at the top",
      "Ardhamandapa (entrance porch) with carved pillars",
      "Stone relief sculptures depicting deities and mythological scenes",
      "Circumambulatory path around the sanctum",
      "Later additions including a Sabha mandap (assembly hall)"
    ],
    architectureImage: "https://images.pexels.com/photos/5529605/pexels-photo-5529605.jpeg",
    materialsUsed: "The temple is primarily constructed of locally sourced sandstone with some elements of marble used for the sanctum. Traditional construction techniques were employed, including dry stone masonry for structural elements and carved stone blocks for decorative features. The construction shows the skilled craftsmanship of local artisans working within established architectural traditions.",
    gallery: [
      {
        url: "https://images.pexels.com/photos/5529598/pexels-photo-5529598.jpeg",
        alt: "Kailash Temple Exterior"
      },
      {
        url: "https://images.pexels.com/photos/5529605/pexels-photo-5529605.jpeg",
        alt: "Temple Shikhara"
      },
      {
        url: "https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg",
        alt: "Temple Entrance"
      },
      {
        url: "https://images.pexels.com/photos/10767296/pexels-photo-10767296.jpeg",
        alt: "Stone Carvings"
      },
      {
        url: "https://images.pexels.com/photos/15541103/pexels-photo-15541103.jpeg",
        alt: "Temple During Festival"
      }
    ],
    nearbyAttractions: [
      {
        name: "Dankaur Fort Ruins",
        distance: "1 km",
        description: "Remains of a historical fort structure",
        imageUrl: "https://images.pexels.com/photos/6287545/pexels-photo-6287545.jpeg"
      },
      {
        name: "Yamuna Khadar",
        distance: "5 km",
        description: "Floodplain ecosystem with unique biodiversity",
        imageUrl: "https://images.pexels.com/photos/5241376/pexels-photo-5241376.jpeg"
      },
      {
        name: "Dankaur Market",
        distance: "0.5 km",
        description: "Traditional small-town market with local goods",
        imageUrl: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg"
      },
      {
        name: "Jewar Historical Site",
        distance: "15 km",
        description: "Archaeological area with connections to ancient settlements",
        imageUrl: "https://images.pexels.com/photos/5793953/pexels-photo-5793953.jpeg"
      }
    ]
  },
  {
    id: "kot-memorial",
    name: "Shaheed Smarak Kot",
    century: "20th Century",
    location: "Noida",
    coordinates: "28.6352°N, 77.4458°E",
    address: "Sector 58, Noida, Uttar Pradesh 201301",
    shortDescription: "A memorial dedicated to the freedom fighters who sacrificed their lives during India's struggle for independence, particularly commemorating the events of 1857.",
    longDescription: "The Shaheed Smarak Kot (Martyrs' Memorial Fort) is a significant historical monument in Noida that honors the freedom fighters who sacrificed their lives during India's struggle for independence, with a special focus on the events of the 1857 uprising against British colonial rule. The memorial is built on the site of a former colonial-era police station (kot) where several freedom fighters were imprisoned and executed. The structure combines elements of traditional Indian memorial architecture with symbolic features representing sacrifice and patriotism. The memorial includes inscriptions with the names of known martyrs from the region and serves as an important reminder of the local contribution to India's independence movement. Regular commemorative events are held here, particularly on Independence Day and Republic Day, making it an active site of historical memory and patriotic education.",
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/b5/7d/c7/shaheed-smarak-largejpg.jpg?w=1000&amp;h=600&amp;s=1",
    builtYear: "1970s",
    builtBy: "Uttar Pradesh Government",
    visitingHours: "6:00 AM - 8:00 PM (Open all days)",
    entryFee: "Free",
    bestTime: "Republic Day (January 26) and Independence Day (August 15) celebrations",
    visitDuration: "30 minutes - 1 hour",
    photography: "Allowed",
    unesco: false,
    history: "The Shaheed Smarak Kot stands at a historically significant location that played a role in India's independence movement. The site was originally a colonial-era police station and detention center where freedom fighters were imprisoned during the 1857 uprising and subsequent independence movements. The memorial was established in the post-independence period to honor the sacrifices made by local freedom fighters.",
    historyTimeline: [
      {
        year: "1857",
        event: "The original 'kot' (police station) was a site of resistance during the First War of Independence."
      },
      {
        year: "1970s",
        event: "Memorial was constructed to commemorate the martyrs and preserve the historical significance of the site."
      },
      {
        year: "2007",
        event: "Major renovation and expansion of the memorial complex for the 150th anniversary of the 1857 uprising."
      }
    ],
    architecture: "The Shaheed Smarak Kot combines traditional Indian memorial architecture with modern commemorative elements. Its design incorporates symbolic features that represent sacrifice, patriotism, and the continuity of historical memory. The architecture is deliberately solemn and dignified, appropriate to its function as a space for remembrance and reflection.",
    architecturalFeatures: [
      "Central memorial pillar (representation of the traditional Indian stambha)",
      "Eternal flame symbolizing the undying spirit of freedom",
      "Memorial wall with inscriptions of martyrs' names",
      "Open central courtyard for ceremonial gatherings",
      "Preserved elements of the original colonial structure",
      "Landscaped gardens with symbolic plantings"
    ],
    architectureImage: "https://images.pexels.com/photos/7608907/pexels-photo-7608907.jpeg",
    materialsUsed: "The memorial is constructed primarily of red sandstone and white marble, materials that have traditional associations with commemorative architecture in North India. Modern construction techniques were used to ensure durability, while the design incorporates traditional craftsmanship in the carved details and inscriptions. The combination of these materials creates a visual connection to both historical structures and India's modern memorial tradition.",
    gallery: [
      {
        url: "https://images.pexels.com/photos/7608906/pexels-photo-7608906.jpeg",
        alt: "Memorial Front View"
      },
      {
        url: "https://images.pexels.com/photos/7608907/pexels-photo-7608907.jpeg",
        alt: "Memorial Pillar"
      },
      {
        url: "https://images.pexels.com/photos/4450393/pexels-photo-4450393.jpeg",
        alt: "Names of Martyrs"
      },
      {
        url: "https://images.pexels.com/photos/3378994/pexels-photo-3378994.jpeg",
        alt: "Commemorative Ceremony"
      },
      {
        url: "https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg",
        alt: "Memorial Gardens"
      }
    ],
    nearbyAttractions: [
      {
        name: "Noida Sector 62 District Center",
        distance: "3 km",
        description: "Modern commercial and administrative hub",
        imageUrl: "https://images.pexels.com/photos/2527572/pexels-photo-2527572.jpeg"
      },
      {
        name: "ISKCON Temple Noida",
        distance: "5 km",
        description: "Modern Hindu temple with spiritual activities",
        imageUrl: "https://images.pexels.com/photos/5529605/pexels-photo-5529605.jpeg"
      },
      {
        name: "Noida City Center",
        distance: "7 km",
        description: "Urban center with shopping and entertainment options",
        imageUrl: "https://images.pexels.com/photos/1350239/pexels-photo-1350239.jpeg"
      },
      {
        name: "Sector 58 Industrial Area",
        distance: "1 km",
        description: "One of Noida's earliest industrial zones with historical significance in the city's development",
        imageUrl: "https://images.pexels.com/photos/2876787/pexels-photo-2876787.jpeg"
      }
    ]
  },
  {
    id: "ancient-step-well",
    name: "Ancient Step Well",
    century: "16th Century",
    location: "Noida",
    coordinates: "28.5838°N, 77.3484°E",
    address: "Sector 37, Noida, Uttar Pradesh 201301",
    shortDescription: "A historic water management structure that provides insights into traditional water conservation methods and architectural practices of pre-modern Noida.",
    longDescription: "The Ancient Step Well in Noida is a remarkable example of traditional water conservation architecture that has survived into the modern era. Believed to date from the 16th century, this step well (or baoli) was designed to provide water access through the changing seasons, allowing people to descend via steps to reach the water level. The structure demonstrates sophisticated understanding of groundwater management and architectural principles to create a functional public utility. Originally serving the agricultural communities that preceded Noida's urban development, the step well features stone construction with decorative elements that reflect regional architectural traditions. Though no longer used for its original purpose, this structure has been preserved as an important heritage site that connects modern Noida to its pre-urban past and traditional water management practices that were sustainable for centuries.",
    imageUrl: "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg",
    builtYear: "circa 16th century",
    builtBy: "Local community leaders",
    visitingHours: "7:00 AM - 6:00 PM (Open all days)",
    entryFee: "Free",
    bestTime: "Early morning or late afternoon",
    visitDuration: "30 minutes",
    photography: "Allowed",
    unesco: false,
    history: "The Ancient Step Well is believed to have been constructed during the 16th century when the region was under Mughal influence. Step wells were common throughout northern India as essential water management structures before modern water systems. This particular well served the agricultural communities that existed long before Noida's urbanization. As modern water systems developed, the step well lost its utilitarian function but has been preserved for its historical and architectural significance.",
    historyTimeline: [
      {
        year: "16th century",
        event: "Construction of the step well to serve local agricultural communities."
      },
      {
        year: "18th-19th centuries",
        event: "Continued use and periodic maintenance by local villages."
      },
      {
        year: "1980s",
        event: "Recognition as a heritage structure during Noida's early development and initial preservation efforts."
      }
    ],
    architecture: "The Ancient Step Well represents traditional Indian water architecture, combining practical utility with aesthetic elements. The design follows established patterns for step wells (baolis) in North India, with steps leading down to the water level and architectural elements that create both functional access and a visually harmonious structure. The well demonstrates how traditional architecture responded to environmental needs while creating spaces of community importance.",
    architecturalFeatures: [
      "Series of descending steps leading to the water level",
      "Stone arch construction for structural support",
      "Chambers and platforms at different levels",
      "Decorative elements including carved stone details",
      "Drainage and water management features",
      "Original depth designed to access groundwater throughout seasonal variations"
    ],
    architectureImage: "https://images.pexels.com/photos/2846218/pexels-photo-2846218.jpeg",
    materialsUsed: "The step well is primarily constructed of locally quarried sandstone, with some elements of limestone. Traditional masonry techniques were employed, including precise stone cutting and fitting without mortar for the main structural elements. The construction demonstrates sophisticated understanding of structural principles needed to create a stable underground structure that could withstand water pressure and seasonal variations.",
    gallery: [
      {
        url: "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg",
        alt: "Step Well Overview"
      },
      {
        url: "https://images.pexels.com/photos/2846218/pexels-photo-2846218.jpeg",
        alt: "Descending Steps"
      },
      {
        url: "https://images.pexels.com/photos/2752783/pexels-photo-2752783.jpeg",
        alt: "Stone Arches"
      },
      {
        url: "https://images.pexels.com/photos/4215040/pexels-photo-4215040.jpeg",
        alt: "Well Architecture"
      },
      {
        url: "https://images.pexels.com/photos/10767496/pexels-photo-10767496.jpeg",
        alt: "Carved Details"
      }
    ],
    nearbyAttractions: [
      {
        name: "Sector 37 Community Park",
        distance: "0.5 km",
        description: "Modern urban park with recreational facilities",
        imageUrl: "https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg"
      },
      {
        name: "Noida Cultural Center",
        distance: "5 km",
        description: "Venue for cultural performances and exhibitions",
        imageUrl: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg"
      },
      {
        name: "Great India Place Mall",
        distance: "6 km",
        description: "Major shopping and entertainment complex",
        imageUrl: "https://images.pexels.com/photos/3493772/pexels-photo-3493772.jpeg"
      },
      {
        name: "Yamuna Biodiversity Park",
        distance: "8 km",
        description: "Ecological conservation area along the river",
        imageUrl: "https://images.pexels.com/photos/5241376/pexels-photo-5241376.jpeg"
      }
    ]
  }
];