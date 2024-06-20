import LinkDelegate from "sap/ui/mdc/LinkDelegate"; 
import LinkItem from "sap/ui/mdc/link/LinkItem";
import Link from "sap/ui/mdc/Link"

const SampleLinkDelegate: LinkDelegate = Object.assign({}, LinkDelegate);

SampleLinkDelegate.fetchLinkItems = function(oLink: any): Promise<LinkItem[]> {
    const oFirstLink: LinkItem = new LinkItem({
        key: "link01",
        text: `Homepage`,
        href: "{homepage}",
        initiallyVisible: true
    });
    const oSecondLink: LinkItem = new LinkItem({
        key: "link02",
        text: `Instagram`,
        href: "{instagram}",
        initiallyVisible: true
    });

    const aLinkItems: LinkItem[] = [
        oFirstLink, oSecondLink,
        new LinkItem({
            key: "link03",
            text: `Facebook`,
            href: "{facebook}"
        }),
        new LinkItem({
            key: "link04",
            text: `TikTok`,
            href: "{tiktok}"
        }),
        new LinkItem({
            key: "link05",
            text: `Twitter`,
            href: "{twitter}"
        })
    ];
    return Promise.resolve(aLinkItems);
}


export default SampleLinkDelegate;