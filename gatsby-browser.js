import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const onClientEntry = async () => {
    if (typeof IntersectionObserver === "undefined") {
      await import("intersection-observer");
      console.log("IntersectionObserver polyfilled ;)");
    }
};