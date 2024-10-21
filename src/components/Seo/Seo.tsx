import { Helmet } from "react-helmet";
interface SeoProps {
  title: string;
  description: string;
  url: string;
  image: string;
  imageAlt: string;
}
export const Seo = ({ title, description, url, image, imageAlt }: SeoProps) => {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Helmet>
  );
};
