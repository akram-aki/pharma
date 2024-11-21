const icons = {
  wify: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewbox="0 0 24 24"
      strokewidth="1.5"
      stroke="currentcolor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
      />
    </svg>
  ),
  parking: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  ),
  tv: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
      />
    </svg>
  ),
  pets: (
    <svg
      dataSlot="icon"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
      />
    </svg>
  ),
  entrance: (
    <svg
      dataSlot="icon"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  ),
  radio: (
    <svg
      dataSlot="icon"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3.75 7.5 16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 0 0 4.5 21h15a2.25 2.25 0 0 0 2.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0 0 12 6.75Zm-1.683 6.443-.005.005-.006-.005.006-.005.005.005Zm-.005 2.127-.005-.006.005-.005.005.005-.005.005Zm-2.116-.006-.005.006-.006-.006.005-.005.006.005Zm-.005-2.116-.006-.005.006-.005.005.005-.005.005ZM9.255 10.5v.008h-.008V10.5h.008Zm3.249 1.88-.007.004-.003-.007.006-.003.004.006Zm-1.38 5.126-.003-.006.006-.004.004.007-.006.003Zm.007-6.501-.003.006-.007-.003.004-.007.006.004Zm1.37 5.129-.007-.004.004-.006.006.003-.004.007Zm.504-1.877h-.008v-.007h.008v.007ZM9.255 18v.008h-.008V18h.008Zm-3.246-1.87-.007.004L6 16.127l.006-.003.004.006Zm1.366-5.119-.004-.006.006-.004.004.007-.006.003ZM7.38 17.5l-.003.006-.007-.003.004-.007.006.004Zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007Zm-.5 1.873h-.008v-.007h.008v.007ZM17.25 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm0 4.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
      />
    </svg>
  ),
  ac: (
    <img
      className="size-8"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABxklEQVR4nO2Yy0oDMRSGP/sIdaPdq4gLF76CoOMI6rtYuxdfwL0g6E7ciXZRL+9i3XkBLxuLNhI5xTB07FxrEueDAzPJycz/k+QME/hhHbgC3gBlebyK1pAIexaIyxq75kzohndgB2hgPw2gJZq19jXdeC03usM1WqL9Ellv+mYa95gS7S8Ya81V1EC/rUZUQl1WGpk3rqO6zD6rjWwBfeDIWPs6JoF94APYdMHINtATLc+GrsF1T3KsN6KZAU6GfPQ6wELMGGuNnLluxJulpTfyqM2+4YIRjRflN4rTH8QsVEZsQ3m7tJTjwYMFIvLGvTbSlpsm7tEU7W3z8OERqOMOddGsxMM3HQuWR9a4Md0tAp8WiFIpQ2teik7VoXSeAxPYSw24EK1a89BDrydJOAZmLTNUk3+SU2NPxx4mrhjnXHExQJ+73gFdIIh5Xp4c9Uvoc6zlUc7nZMq68n8QZ6RrtN3GPCtPjopEX/oP5E+yMMo2MjYCEaFfvlpyTsW/IUxQjcrIK5ykG7TovMLxxkiQsNIUnVfhLWHK6lJ2fmbSbsqy8zPjjZEgZXUpO7/CWcKcVeSvxxe2+f56vH9GgpxVZGzjvwCWLFp+i+9uGwAAAABJRU5ErkJggg=="
    ></img>
  ),
  pool: (
    <img
      className="size-8"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJElEQVR4nO2XPUgcQRTHf3pCEFGTxkYUtI8IFob0SiAXRLERhBQSGyGClYpdjnRnsDAS1CZYWgjWKnh+VKmSQiFVQJHg9wkm5mPDwjuYHHdzc+Ptnovzg8dxe//Zmf+9t292wOFwOO4zTcAMcAhcA9vAMyJEMzAH/AS8rPgLDBABAzPy73uauAAaibABT4llIm7AU6Lnrhj4YWkgE9+A2nIYeCAGbopYrK/9pPn9ncG8L4AN4EpiHYjfxsh0kQYWgVagGviaR/cb6NDM+VYzR8LWyImhgQWgJWtsl2aMn7GqPJnwCoRVZk4tDKgsacaP5dBvGBhZK1Vp+QbmCxjI0KDJalqaiErawMil7cOeBI5lQR8MDahMaRa1GpaR21AnGS3U8fqVMetBlZYNFcCgvDiadLsDoF7Gxg30z8Mw0QZsFtGyM/FeuUdCo3sTtIGHsnH+sjDhxx+gU7lfXEooLbEWdCb8MnoJHFkaUGOFMtEObJXAQCb8zhgqj4BZedXwShj+mSUUKoEh4HuJDeTbUwIjqVlECngK1ABPgF0LbTchEQOGZeJz4AzYAV5Jtmy1VUGf6WPApJwHJuS7Tjsurw+m2nQR2gv51Gn/o142tVHgS1ZJfJbrbaIrpH0NPA5Ym5NUjnreA0aAfYOHtRzaVD4jVzLwI9Cr1LOf0j65vq8cQcut3cydE8fdJua6Fq5rea5rOSJEzHUtXNfyXNdyOBwOosQ/yJSwDXoWDLQAAAAASUVORK5CYII="
    ></img>
  ),
  beach: (
    <img
      className="size-8"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJElEQVR4nO2XPUgcQRTHf3pCEFGTxkYUtI8IFob0SiAXRLERhBQSGyGClYpdjnRnsDAS1CZYWgjWKnh+VKmSQiFVQJHg9wkm5mPDwjuYHHdzc+Ptnovzg8dxe//Zmf+9t292wOFwOO4zTcAMcAhcA9vAMyJEMzAH/AS8rPgLDBABAzPy73uauAAaibABT4llIm7AU6Lnrhj4YWkgE9+A2nIYeCAGbopYrK/9pPn9ncG8L4AN4EpiHYjfxsh0kQYWgVagGviaR/cb6NDM+VYzR8LWyImhgQWgJWtsl2aMn7GqPJnwCoRVZk4tDKgsacaP5dBvGBhZK1Vp+QbmCxjI0KDJalqaiErawMil7cOeBI5lQR8MDahMaRa1GpaR21AnGS3U8fqVMetBlZYNFcCgvDiadLsDoF7Gxg30z8Mw0QZsFtGyM/FeuUdCo3sTtIGHsnH+sjDhxx+gU7lfXEooLbEWdCb8MnoJHFkaUGOFMtEObJXAQCb8zhgqj4BZedXwShj+mSUUKoEh4HuJDeTbUwIjqVlECngK1ABPgF0LbTchEQOGZeJz4AzYAV5Jtmy1VUGf6WPApJwHJuS7Tjsurw+m2nQR2gv51Gn/o142tVHgS1ZJfJbrbaIrpH0NPA5Ym5NUjnreA0aAfYOHtRzaVD4jVzLwI9Cr1LOf0j65vq8cQcut3cydE8fdJua6Fq5rea5rOSJEzHUtXNfyXNdyOBwOosQ/yJSwDXoWDLQAAAAASUVORK5CYII="
    ></img>
  ),
  maid: (
    <img
      className="size-8"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJElEQVR4nO2XPUgcQRTHf3pCEFGTxkYUtI8IFob0SiAXRLERhBQSGyGClYpdjnRnsDAS1CZYWgjWKnh+VKmSQiFVQJHg9wkm5mPDwjuYHHdzc+Ptnovzg8dxe//Zmf+9t292wOFwOO4zTcAMcAhcA9vAMyJEMzAH/AS8rPgLDBABAzPy73uauAAaibABT4llIm7AU6Lnrhj4YWkgE9+A2nIYeCAGbopYrK/9pPn9ncG8L4AN4EpiHYjfxsh0kQYWgVagGviaR/cb6NDM+VYzR8LWyImhgQWgJWtsl2aMn7GqPJnwCoRVZk4tDKgsacaP5dBvGBhZK1Vp+QbmCxjI0KDJalqaiErawMil7cOeBI5lQR8MDahMaRa1GpaR21AnGS3U8fqVMetBlZYNFcCgvDiadLsDoF7Gxg30z8Mw0QZsFtGyM/FeuUdCo3sTtIGHsnH+sjDhxx+gU7lfXEooLbEWdCb8MnoJHFkaUGOFMtEObJXAQCb8zhgqj4BZedXwShj+mSUUKoEh4HuJDeTbUwIjqVlECngK1ABPgF0LbTchEQOGZeJz4AzYAV5Jtmy1VUGf6WPApJwHJuS7Tjsurw+m2nQR2gv51Gn/o142tVHgS1ZJfJbrbaIrpH0NPA5Ym5NUjnreA0aAfYOHtRzaVD4jVzLwI9Cr1LOf0j65vq8cQcut3cydE8fdJua6Fq5rea5rOSJEzHUtXNfyXNdyOBwOosQ/yJSwDXoWDLQAAAAASUVORK5CYII="
    ></img>
  ),
};

export default icons;
