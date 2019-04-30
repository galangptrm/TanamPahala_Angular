import { async, TestBed } from '@angular/core/testing';
import { TentangKamiComponent } from './tentang-kami.component';
describe('TentangKamiComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TentangKamiComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TentangKamiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tentang-kami.component.spec.js.map