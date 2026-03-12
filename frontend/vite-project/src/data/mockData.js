export const featuredJourneys = [
    {
      id: 1,
      from: 'Birmingham City Centre',
      to: 'University of Birmingham',
      date: '2026-03-08',
      time: '08:30',
      seats: 3,
      price: 4.5,
      driver: 'Emily',
      quietPreferred: true,
      verified: true,
    },
    {
      id: 2,
      from: 'Selly Oak',
      to: 'City Hospital',
      date: '2026-03-08',
      time: '09:00',
      seats: 2,
      price: 3.8,
      driver: 'James',
      quietPreferred: false,
      verified: true,
    },
    {
      id: 3,
      from: 'Edgbaston',
      to: 'New Street Station',
      date: '2026-03-08',
      time: '18:10',
      seats: 1,
      price: 5.2,
      driver: 'Sofia',
      quietPreferred: true,
      verified: false,
    },
  ];
  
  export const myTrips = [
    {
      id: 101,
      type: 'Booked',
      route: 'Birmingham City Centre → UoB',
      time: 'Tomorrow, 08:30',
      status: 'Confirmed',
    },
    {
      id: 102,
      type: 'Published',
      route: 'UoB → Selly Oak',
      time: 'Friday, 17:40',
      status: '2 passengers joined',
    },
  ];
  
  export const userProfile = {
    name: 'FakeName',
    email: 'FakeName@example.com',
    role: 'Passenger / Driver',
    preferences: ['Quiet ride', 'Punctuality', 'Verified users only'],
  };