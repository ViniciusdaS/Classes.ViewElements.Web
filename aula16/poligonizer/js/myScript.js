let $sitelading = $('#site-landing');
      $sitelading.polygonizr({
        numberOfNodes: 30,
        restNodeMovements: 0,
        node3dRotate: true,
        node3dRotateAxis: "median",
        node3dDepthDistance: 50,
        node3dRotateDepthAlpha: 0,
        node3dRotateDuration: 10,
        nodeDotColor: ["200, 200, 200", "200, 0, 0"],
        nodeDotColoringSchema: "random",
        nodeDotSize: 2,
        duration: 20,
        nodeFillSapce: false,
        nodeDotPrediction: 0.1,
        numberOfUnconnectedNode: 20,
        randomizePolygonMeshNetworkFormation: false,
        specifyPolygonMeshNetworkFormation: function (i) {
          let forEachNode = {
            // Half a circle and randomized
            x: (this.canvasWidth * 0.85) - ((this.canvasWidth / 2) * Math.cos(i * (2 * Math.PI / this.numberOfNodes))) * Math.random(),
            y: (this.canvasHeight * 1.10) - (this.canvasHeight * (i / this.numberOfNodes))
          };
          return forEachNode;
        }
      });
  
      // Update size.
      $(window).resize(function () {
        $sitelading.polygonizr("stop");
        $sitelading.polygonizr({
          canvasHeight: $(this).height(),
          canvasWidth: $(this).width()
        });
  
        $sitelading.polygonizr("refresh");
      });