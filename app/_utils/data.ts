export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const dateNow = new Date();

  // Verifica se a data é de hoje
  const isToday =
    date.getDate() === dateNow.getDate() &&
    date.getMonth() === dateNow.getMonth() &&
    date.getFullYear() === dateNow.getFullYear();

  if (isToday) {
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }

  return date
    .toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .replace(",", "");
}

export function formatDateTimeToDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
}

// Saída: "24/10/24 16:51"
