const eventData = () => {
  type: [
    {
      title: `Taxi`,
      icon: `🚕`
    },
    {
      title: `Bus`,
      icon: `🚌`
    },
    {
      title: `Train`,
      icon: `🚂`
    },
    {
      title: `Ship`,
      icon: `🛳️`
    },
    {
      title: `Transport`,
      icon: `🚊`
    },
    {
      title: `Drive`,
      icon: `🚗`
    },
    {
      title: `Flight`,
      icon: `✈️`
    },
    {
      title: `Check-in`,
      icon: `🏨`
    },
    {
      title: `Sightseeing`,
      icon: `🏛️`
    },
    {
      title: `Restaurant`,
      icon: `🍴`
    }
  ][Math.floor(Math.random() * 10)],
    city: new Set([
      `London`,
      `Paris`,
      `New York`,
      `Warsaw`,
      `Maracaibo`,
      `Ho Chi Minh City`
    ]),
      picture: `//picsum.photos/100/100?r=${Math.random()}`,
        offers: [
          `Add luggage`,
          `Switch to comfort class`,
          `Add meal`,
          `Choose seats`
        ],
          description: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
            `Cras aliquet varius magna, non porta ligula feugiat eget.`,
            `Fusce tristique felis at fermentum pharetra.`,
            `Aliquam id orci ut lectus varius viverra.`,
            `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
            `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
            `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
            `Sed sed nisi sed augue convallis suscipit in sed felis.`,
            `Aliquam erat volutpat.`,
            `Nunc fermentum tortor ac porta dapibus.`,
            `In rutrum ac purus sit amet tempus.`
          ][Math.floor(Math.random() * 11)]
};

export {eventData};


