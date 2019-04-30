import { TestBed } from '@angular/core/testing';
import { AnggotaService } from './anggota.service';
describe('AnggotaService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(AnggotaService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=anggota.service.spec.js.map