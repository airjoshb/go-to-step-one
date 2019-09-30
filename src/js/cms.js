import React from "react";
import CMS from "netlify-cms";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import ProductsPreview from "./cms-preview-templates/products";
import AboutPreview from "./cms-preview-templates/about";
import ContactPreview from "./cms-preview-templates/contact";
import UpdatePreview from "./cms-preview-templates/update";
import NewsletterPreview from "./cms-preview-templates/newsletter";
import GearPreview from "./cms-preview-templates/gear";

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("products", ProductsPreview);
CMS.registerPreviewTemplate("about", AboutPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerPreviewTemplate("update", UpdatePreview);
CMS.registerPreviewTemplate("newsletter", NewsletterPreview);
CMS.registerPreviewTemplate("gear", GearPreview);
CMS.registerWidget("color", ColorControl);
