import Image from "next/image";
import Script from "next/script";

export default function LoadingComp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Tenor GIF Embed */}
      <div className="mb-4">
        <div
          className="tenor-gif-embed"
          data-postid="17796441"
          data-share-method="host"
          data-aspect-ratio="1"
          data-width="100%"
        >
          <a href="https://tenor.com/view/loading-buffering-buffer-load-circle-gif-17796441">
            Loading Buffering GIF
          </a>{" "}
          from{" "}
          <a href="https://tenor.com/search/loading-gifs">Loading GIFs</a>
        </div>
        <Script src="https://tenor.com/embed.js" strategy="lazyOnload" />
      </div>

      {/* Direkt eingebundenes Bild (achte darauf, dass dies eine direkte GIF-URL ist) */}
      <Image
        alt="bufferinggif"
        src="https://media.tenor.com/4sdgJhm8EaEAAAAd/loading-buffering-buffer-load-circle.gif"
        width={200}
        height={200}
        className="mx-auto"
      />
    </div>
  );
}
