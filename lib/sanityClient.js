import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'mha6e8fc',
  dataset: 'production',
  apiVersion: '2022-12-29',
  token:
    'skF8nQ3eNXlvVG5FQfCRdkgVyvWeeDjjfuLAQF5PMmwhAYqEEMc41cbgSNtbu4Rus9Rotpu9uNdyq4cNIdzGyyh3SALKRnfNgiSHlOmDOxBWTfmvHWy17a3gpANi0d6EJQyvqo7NCyyzVF14hHW2mHV3ckf13r1KYWDR762Ii4pRjF0THIwA',
  useCdn: false,
})