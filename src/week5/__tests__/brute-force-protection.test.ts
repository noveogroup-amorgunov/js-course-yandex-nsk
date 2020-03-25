import {
    bruteForceDetected,
    FAILURE_MAX_COUNT,
} from '../brute-force-protection';

describe('функция bruteForceDetected', () => {
    test('должна при первом успешном обращении не определять брутфорс', () => {
        const request = bruteForceDetected({
            sourceIP: '216.58.209.67',
            successful: true,
        });

        expect(request).toEqual(false);
    });

    test('должна при >FAILURE_MAX_COUNT неуспешных обращений определять брутфорс', () => {
        const requestArgs = { sourceIP: '87.98.231.40', successful: false };

        for (let i = 0; i < FAILURE_MAX_COUNT - 1; i += 1) {
            expect(bruteForceDetected(requestArgs)).toEqual(false);
        }

        // на 21 запросе атака должна быть обнаружена
        expect(bruteForceDetected(requestArgs)).toEqual(true);
    });
});
