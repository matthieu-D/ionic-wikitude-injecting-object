var World = {

	init: function initFn() {

		/*
			First a location where the model should be displayed will be defined. This location will be relativ to the user.
		*/
		var location = new AR.RelativeLocation(null, 5, 0, 2);

		/*
			Next the model object is loaded.
		*/
		var modelEarth = new AR.Model("assets/earth.wt3", {
			scale: {
				x: 1,
				y: 1,
				z: 1
			}
		});

    var indicatorImage = new AR.ImageResource("assets/indicator.png");

    var indicatorDrawable = new AR.ImageDrawable(indicatorImage, 0.1, {
        verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP
    });

		/*
			Putting it all together the location and 3D model is added to an AR.GeoObject.
		*/
		var obj = new AR.GeoObject(location, {
      drawables: {
        cam: [modelEarth],
        indicator: [indicatorDrawable]
      }
    });
	}
};

World.init();
