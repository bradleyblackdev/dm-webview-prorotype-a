export enum ContentComponent {
    pageProgress = "pageProgress", //maybe here or module level
    pageHeader = "pageHeader",
    pageBody = "pageBody",
    pageFooter = "pageFooter",
    pageXofX = "pageXofX", //is this needed in addition to progress bar?
    iconWithText = "iconWithText", //to do
    // didYouKnow = "didYouKnow", //nice to have
    img = "img",
    video = "video",
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    eyebrow = "eyebrow",
    p = "p",
    p18 = "p18",
    p14 = "p14",
    ol = "ol",
    ul = "ul",
    check = "check",
    accordionHead = "accordionHead",
    accordionBody = "accordionBody",
    divider = "divider",
    buttonBack = "buttonBack",
    buttonPrimary = "buttonPrimary"
}

export type ContentComponents = [ContentComponent,string][]

export type PageComponents = {
    contentComponents: ContentComponents
    questionComponents: []
}

export type Module = {
    pages: [PageComponents]
}
