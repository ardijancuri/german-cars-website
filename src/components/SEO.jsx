const BASE_URL = 'https://autopflege-aria.de'

export default function SEO({ title, description, keywords, path = '/', image }) {
  const fullTitle = title
    ? `${title} | Autopflege Aria`
    : 'Autopflege Aria - Professionelle Fahrzeugpflege'
  const fullUrl = `${BASE_URL}${path}`
  const ogImage = image ? `${BASE_URL}${image}` : `${BASE_URL}/images/herosection.jpeg`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:image" content={ogImage} />
    </>
  )
}
