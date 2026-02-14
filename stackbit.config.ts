import { defineStackbitConfig } from "@stackbit/types";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "nextjs",
  nodeVersion: "20",

  // ✅ Critical: tells Netlify Create how to run your preview server
  devCommand: "npm run dev",

  contentSources: [
    {
      name: "content",
      type: "git",
      rootPath: ""
    }
  ],

  models: [
    {
      name: "Home",
      type: "data",
      filePath: "src/content/pages/home.json",

      // ✅ Critical: links this content to your homepage URL
      urlPath: "/",

      fields: [
        // ✅ Drag/drop order of sections
        {
          name: "sectionOrder",
          type: "list",
          items: { type: "string" }
        },

        {
          name: "nav",
          type: "object",
          fields: [
            { name: "howItWorksLabel", type: "string" },
            { name: "contactLabel", type: "string" }
          ]
        },

        {
          name: "hero",
          type: "object",
          fields: [
            { name: "badge", type: "string" },
            { name: "titleTop", type: "string" },
            { name: "titleGradient", type: "string" },
            { name: "subtitle", type: "text" },
            { name: "primaryCta", type: "string" },
            { name: "secondaryCta", type: "string" },
            { name: "bgImage", type: "string" }
          ]
        },

        {
          name: "burden",
          type: "object",
          fields: [
            { name: "badge", type: "string" },
            { name: "heading", type: "string" },
            { name: "subheading", type: "text" },

            {
              name: "stats",
              type: "list",
              items: {
                type: "object",
                fields: [
                  { name: "value", type: "string" },
                  { name: "label", type: "string" }
                ]
              }
            },

            {
              name: "consequence",
              type: "object",
              fields: [
                { name: "title", type: "string" },
                { name: "intro", type: "text" },

                {
                  name: "bullets",
                  type: "list",
                  items: {
                    type: "object",
                    fields: [
                      { name: "title", type: "string" },
                      { name: "text", type: "string" }
                    ]
                  }
                },

                { name: "outro", type: "string" }
              ]
            }
          ]
        },

        {
          name: "contact",
          type: "object",
          fields: [
            { name: "badge", type: "string" },
            { name: "heading", type: "string" },
            { name: "subheading", type: "text" },
            { name: "title", type: "string" },
            { name: "subtitle", type: "string" },
            { name: "phone", type: "string" },
            { name: "email", type: "string" }
          ]
        },

        {
          name: "footer",
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "description", type: "text" },
            { name: "copyright", type: "string" },
            { name: "credit", type: "string" }
          ]
        }
      ]
    }
  ]
});
