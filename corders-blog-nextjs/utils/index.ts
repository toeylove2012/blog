export const formatDate = (dateString: string): string => {
  const date = new Date(dateString).toLocaleDateString("th-TH", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return date;
};

export const makeCategory = (slug: string): string => {
  if (typeof slug === "string") {
    //'node-js' => ['node', 'js'] =>  'node js'
    return slug.split("-").join(" ");
  }
  return "";
};

export const capitalizeFirstLetter = (str: string): string => {
  //'node js' => 'Node js'
  return str.charAt(0).toUpperCase() + str.slice(1);
};
