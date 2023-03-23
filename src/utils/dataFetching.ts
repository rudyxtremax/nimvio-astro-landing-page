const APICD_URL = `${import.meta.env.PUBLIC_APICD_URL}`;
const PROJECT_ID = `${import.meta.env.PUBLIC_PROJECT_ID}`;

/**
 * Get Content data By ContentID
 * @param client API Client from astro fetch function
 * @param id ContentID that will be fetched
 * @returns
 */
export const getContentById = async (client: Function, id: string) => {
  try {
    const response = await client(`${APICD_URL}/${PROJECT_ID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query {
              content(contentId:"${id}") {
                Data
            }
          }
        `,
      }),
    });

    return await response.json();
  } catch (error) {
    console.log("error fetching id ", id, error);
    console.log("error :", error);
  }
};

/**
 * Get Subcontent data By Parent ContentID
 * @param client API Client from astro fetch function
 * @param id ContentID of the parent
 * @returns
 */
export const getSubcontentByParentId = async (client: Function, id: string) => {
  try {
    const response = await client(`${APICD_URL}/${PROJECT_ID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query {
              content(contentId:"${id}", retrieveChild: true, depth: 1) {
                Data
            }
          }
        `,
      }),
    });

    return await response.json();
  } catch (error) {
    console.log("error fetching id ", id, error);
    console.log("error :", error);
  }
};

/**
 * Get Subcontent data By Parent ContentID and Template Name
 * @param client API Client from astro fetch function
 * @param id ContentID of the parent
 * @param name Template Name of sub content
 * @returns
 */
export const getSubcontentByParentIdAndTemplateName = async (
  client: Function,
  id: string,
  name: string
) => {
  try {
    const response = await client(`${APICD_URL}/${PROJECT_ID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query {
              content(contentId:"${id}", templateName: "${name}", retrieveChild: true, depth: 1) {
                Data
                ContentID
            }
          }
        `,
      }),
    });

    return await response.json();
  } catch (error) {
    console.log("error fetching id ", id, error);
    console.log("error :", error);
  }
};
