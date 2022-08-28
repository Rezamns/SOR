import {
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Subscription} from "rxjs";
import {SlideWrapperService} from "../service/slide-wrpper.service";

@Component({
  selector: 'app-slide-wrapper',
  templateUrl: './slide-wrapper.component.html',
  styleUrls: ['./slide-wrapper.component.scss']
})
export class SlideWrapperComponent implements OnInit , OnDestroy{
  target: any;
  showSlideWrapper: any;
  subscription: Subscription = new Subscription();
  @ViewChild('container', {read: ViewContainerRef , static: true}) public componentHosts:ViewContainerRef;
  constructor(
    private  slideWrapper: SlideWrapperService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private changeDetectionRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.createTaskSlider();
  }

  createTaskSlider() {
    this.subscription.add(this.slideWrapper.showSlideWrapperSubject.subscribe(
      (dynamicSlider) => {
        this.showSlideWrapper = dynamicSlider;
        if(this.showSlideWrapper === undefined ) {
          setTimeout(() => {
            this.closeTaskSlide();
          },500)
        } else {
          this.loadComponent();
        }
      }
    ))
  }

  closeTaskSlide() {
    this.target.clear();
  }

  loadComponent() {
    if(typeof (this.componentHosts) !== undefined && this.showSlideWrapper !== undefined) {
      this.target = this.componentHosts;
      this.target.clear();
      const widgetComponent = this.componentFactoryResolver.resolveComponentFactory(this.showSlideWrapper);
      this.target.createComponent(widgetComponent);
    }
    this.changeDetectionRef.detectChanges();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
