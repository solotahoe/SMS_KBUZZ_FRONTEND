export default function formatDate(dateString) {
    const date = new Date(dateString); // Convert the ISO string to a Date object
  
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
  
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
  
  