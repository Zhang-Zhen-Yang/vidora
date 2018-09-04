import { Component, OnInit, AfterViewInit, ElementRef} from '@angular/core';


@Component({
  selector: 'app-workcanvas',
  templateUrl: './workcanvas.component.html',
  styleUrls: ['./workcanvas.component.css']
})
export class WorkcanvasComponent implements OnInit, AfterViewInit {

  c: any
  constructor(private elementRef: ElementRef) { 
    this.c = window['createjs'];
    console.log(this.c);
  }

  ngOnInit() {

  }
  ngAfterViewInit() {
    let canvas =this.elementRef.nativeElement.querySelector('#workcanvas');//获取第一个p
    console.dir(canvas);
    const timeline=new this.c.Timeline();
    const stage = new this.c.Stage(canvas);
    this.c.Touch.enable(stage);
    this.c.Ticker.addEventListener("tick", stage);

    var queue = new this.c.LoadQueue();
    queue.loadManifest([
      {
        id: 'bg',
        src: 'http://file06.16sucai.com/2016/0329/c2761608b0aa52d7404e460978c08a2d.jpg',
      },
      {
        id: 'img1',
        src:'http://img5.duitang.com/uploads/item/201510/04/20151004095236_fFeZX.thumb.700_0.jpeg',
      },
      {
        id: 'img2',
        src:'http://img5.duitang.com/uploads/item/201509/02/20150902213319_wNPYn.thumb.700_0.jpeg',
      },
      {
        id: 'img3',
        src: 'http://img5.duitang.com/uploads/item/201510/04/20151004095106_KZRmG.thumb.700_0.jpeg',
      },
      {
        id: 'img4',
        src: 'http://cdn.duitang.com/uploads/item/201509/02/20150902220621_NZTMf.thumb.700_0.jpeg',
      },
      {
        id: 'img5',
        src: 'http://cdn.duitang.com/uploads/item/201509/02/20150902220128_TC35w.thumb.700_0.jpeg',
      }
    ])

    queue.on('complete', () => {
      console.log('complete');
      
      // bg
      var bg = queue.getResult('bg');
      console.log(canvas.height);
      var bgBitmap = new this.c.Bitmap(bg);
      bgBitmap.set({
        height: canvas.height,
        scaleY: 1.1,
      });

      stage.addChild(bgBitmap);


      // bitmap1 -----------------------------------------------------------------------------
      /* var img1 = queue.getResult('img1');
      var bitmap1 = new this.c.Bitmap(img1);
      
      var bitmapMask = new this.c.Shape();
      bitmapMask.graphics.beginFill('red').drawCircle(150, 150, 100);
      bitmap1.mask = bitmapMask;
      var container = new this.c.Container();
      bitmapMask.shadow = new this.c.Shadow("rgba(0,0,0,0.5)", 5, 5, 10);
      container.addChild(bitmapMask);
      container.addChild(bitmap1);
      
      bitmap1.set({
        scaleX: 0.5,
        scaleY: 0.5,
      })
      container.set({
        x: 250,
        y: 250,
      })*/
      var img1 = queue.getResult('img1');
        var bitmap1 = new this.c.Bitmap(img1);
        stage.addChild(bitmap1);
        bitmap1.set({
          regX: img1.width / 2,
          regY: img1.height / 2,
          x: canvas.width + img1.width / 2,
          y: canvas.height / 2,
          rotation: 10,
          shadow: new this.c.Shadow("rgba(0,0,0,0.5)", 5, 5, 10),
        });
        var tween1 = this.c.Tween.get(bitmap1, {})
          .to({
            x: canvas.width / 2,
            y: canvas.height / 2,
          }, 1000,this.c.Ease.backInOut)
          .wait(1000)
          .to({
            x: -canvas.width / 2
          }, 700)

      
      // bitmap2 -------------------------------------------------------------------------------
      /* var img2 = queue.getResult('img2');
      var width = img2.width;
      var height = img2.height;
      console.log([width, height]);
      var bitmap2 = new this.c.Bitmap(img2);
      bitmap2.shadow = new this.c.Shadow("rgba(0,0,0,0.5)", 5, 5, 10);
      
      bitmap2.set({
        x: 400,
        y: 400,
        regX: width / 2,
        regY: height / 2,
        cursor : 'pointer',
        rotation: 0,
      })
      stage.addChild(bitmap2);
      stage.addChild(container);
      // tween

      var tween2 = this.c.Tween.get(bitmap2, {loop: -1, bounce: true})
        // .wait(500)
        .to({
          // alpha:1,
          // visible:false,
          rotation: 360,
        }, 1000, this.c.Ease.backInOut)
        .to({
          alpha: 0.8,
        }, 2000, this.c.Ease.linear)
        .to({
          alpha: 1,
          // alpha: 1,
          scaleX: 0.5,
          scaleY: 0.5,
        }, 2000)
        .to({
          scaleX: 1,
          scaleY: 1,
        }, 5000)
        .call(function() {
          console.log('ddddddddddddddddddddddddd');
        });


        this.c.MotionGuidePlugin.install();
        var tween1 = this.c.Tween.get(container, {loop: -1 }).to({guide:{ path:[250,250, 0,0, 200,200, 200,600, 0,0, 100,100, 250, 250] }},5000);*/

        var img2 = queue.getResult('img2');
        var bitmap2 = new this.c.Bitmap(img2);
        stage.addChild(bitmap2);
        bitmap2.set({
          regX: img2.width / 2,
          regY: img2.height / 2,
          x: canvas.width + img2.width * 0.7,
          y: canvas.height / 2,
          rotation: -10,
          shadow: new this.c.Shadow("rgba(0,0,0,0.5)", 5, 5, 10),
        });
        var tween2 = this.c.Tween.get(bitmap2, {})
          .wait(2000)
          .to({
            x: canvas.width / 2
          }, 1000, this.c.Ease.backInOut)
          .wait(1000)
          .to({
            x: -canvas.width / 2
          }, 700)






        // bitmap3 -----------------------------------------------------------------------------------------
        var img3 = queue.getResult('img3');
        var bitmap3 = new this.c.Bitmap(img3);
        stage.addChild(bitmap3);
        bitmap3.set({
          regX: img3.width / 2,
          regY: img3.height / 2,
          x: canvas.width + img3.width * 0.7,
          y: canvas.height / 2,
          rotation: 10,
          shadow: new this.c.Shadow("rgba(0,0,0,0.5)", 5, 5, 10),
        });
        var tween3 = this.c.Tween.get(bitmap3, {})
          .wait(4000)
          .to({
            x: canvas.width / 2
          }, 1000, this.c.Ease.backInOut)
          .wait(1000)
          .to({
            x: -canvas.width / 2
          }, 700)

        // bitmap4 -----------------------------------------------------------------------------------------
        var img4 = queue.getResult('img4');
        var bitmap4 = new this.c.Bitmap(img4);
        stage.addChild(bitmap4);
        bitmap4.set({
          regX: img4.width / 2,
          regY: img4.height / 2,
          x: canvas.width + img4.width * 0.7,
          y: canvas.height / 2,
          rotation: -10,
          shadow: new this.c.Shadow("rgba(0,0,0,0.5)", 5, 5, 10),
        });
        var tween4 = this.c.Tween.get(bitmap4, {})
          .wait(6000)
          .to({
            x: canvas.width / 2
          }, 1000, this.c.Ease.backInOut)
          .wait(1000)
          .to({
            x: -canvas.width / 2
          }, 700)

        // bitmap5 -----------------------------------------------------------------------------------------
        var img5 = queue.getResult('img5');
        var bitmap5 = new this.c.Bitmap(img5);
        stage.addChild(bitmap5);
        bitmap5.set({
          regX: img5.width / 2,
          regY: img5.height / 2,
          x: canvas.width + img5.width * 0.7,
          y: canvas.height / 2,
          rotation: 10,
          shadow: new this.c.Shadow("rgba(0,0,0,0.5)", 5, 5, 10),
        });
        var tween5 = this.c.Tween.get(bitmap5, {})
          .wait(8000)
          .to({
            x: canvas.width / 2
          }, 1000, this.c.Ease.backInOut)
          .wait(1000)
          .to({
            x: canvas.width / 2 - 1
          }, 1000)
          
          // price
          
          var priceContainer = new this.c.Container();
          stage.addChild(priceContainer);
          priceContainer.set({
            y: 100,
          });
          
          var rect1 = new this.c.Shape();
          rect1.graphics.beginFill('#c31311').drawRect(0, 0, 200, 40);
          rect1.set({
            x: -200,
            y: 0,
            opacity: 0,
          });
          var rect2 = new this.c.Shape();
          rect2.graphics.beginFill('white').drawRect(0, 40, 300, 50);
          rect2.set({
            x: -300,
            y: 0,
            opacity: 0,
          });
          var rect3 = new this.c.Shape();
          rect3.graphics.beginFill('gray').drawRect(0, 90, 250, 40);
          rect3.set({
            x: -250,
            y: 0,
            opacity: 0,
          });

          priceContainer.addChild(rect1);
          priceContainer.addChild(rect2);
          priceContainer.addChild(rect3);

          var rectTween1 = this.c.Tween.get(rect1)
          .wait(2000)
          .to({
            x: -100,
            opacity: 1,
          }, 1500, this.c.Ease.backInOut)

          var rectTween2 = this.c.Tween.get(rect2)
          .wait(2000)
          .to({
            x: -150,
            opacity: 1,
          }, 1000, this.c.Ease.backInOut)

          var rectTween3 = this.c.Tween.get(rect3)
          .wait(2000)
          .to({
            x: -130,
            opacity: 1,
          }, 1200, this.c.Ease.backInOut)


          // price 1
          var price1 = new this.c.Text('促销价', 'bold 25px Impact');
          price1.set({
            color: 'white',
            x: 10,
            y: 5,
            alpha: 0,
          })
          priceContainer.addChild(price1);
          var priceTween1 = this.c.Tween.get(price1)
          .wait(3000)
          .to({
            alpha: 1,
          }, 500);
          
          // price 2
          var price2 = new this.c.Text('¥ 200', 'bold 35px Impact');
          price2.set({
            color: '#c31311',
            x: 10,
            y: 45,
            alpha: 0,
          })
          priceContainer.addChild(price2);
          var priceTween2 = this.c.Tween.get(price2)
          .wait(3000)
          .to({
            alpha: 1,
          }, 500);

          // price 3
          var price3 = new this.c.Text('原价 267', 'normal 25px Impact');
          price3.set({
            color: 'white',
            x: 10,
            y: 95,
            alpha: 0,
          })
          priceContainer.addChild(price3);
          var priceTween3 = this.c.Tween.get(price3)
          .wait(3000)
          .to({
            alpha: 1,
          }, 500);

          // bar 
          var bar = new this.c.Shape();
          bar.graphics.beginFill('#eeeeee').drawRect(0, 0, 100, 3);
          bar.set({
            x: -50,
            y: 110,
            alpha: 0,
          })
          var barTween = this.c.Tween.get(bar)
          .wait(3000)
          .to({
            x: 10,
            alpha: 1,
          }, 500)
          priceContainer.addChild(bar);

        // timeline
        timeline.addTween(
          tween1,
          tween2,
          tween3,
          tween4,
          tween5,
          rectTween1,
          rectTween2,
          rectTween3,
          priceTween1,
          priceTween2,
          priceTween3,
          barTween,
        );
        
        timeline.setPaused(true);
        timeline.setPosition(0.1);
        
    });

  }

}
