type Args = {
    sourceIP: string;
    successful: boolean;
};

export const FAILURE_MAX_COUNT = 20;
const attempts: Record<string, number> = {};

export function bruteForceDetected({ sourceIP, successful }: Args) {
    attempts[sourceIP] = successful ? 0 : 1 + (attempts[sourceIP] || 0);

    return attempts[sourceIP] >= FAILURE_MAX_COUNT;
}
