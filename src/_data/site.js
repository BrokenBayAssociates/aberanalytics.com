export default function() {
    const isStaging = process.env.ELEVENTY_ENV === 'staging';
    return {
        title: "Aber Analytics",
        url: "https://aberanalytics.com",
        description: "Next-generation energy advisory and modelling tools. Built for applied decision-making with high transparency and low friction.",
        showInsightsNav: isStaging
    };
}
