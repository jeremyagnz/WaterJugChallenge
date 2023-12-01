class WaterJugUseCase {
    private bucketX: number;
    private bucketY: number;
    private steps: string[];

    constructor() {
        this.bucketX = 2;
        this.bucketY = 10;
        this.steps = [];
    }

    private fillBucket(bucket: string): { bucketX: number; bucketY: number } {
        if (bucket === 'x') {
            this.steps.push(`Fill bucket X (${this.bucketX} | ${this.bucketY})`);
            return { bucketX: this.bucketX, bucketY: this.bucketY };
        } else {
            this.steps.push(`Fill bucket Y (${this.bucketX} | ${this.bucketY})`);
            return { bucketX: this.bucketX, bucketY: 0 };
        }
    }

    private emptyBucket(bucket: string): { bucketX: number; bucketY: number } {
        if (bucket === 'x') {
            this.steps.push(`Empty bucket X (${this.bucketX} | ${this.bucketY})`);
            return { bucketX: 0, bucketY: this.bucketY };
        } else {
            this.steps.push(`Empty bucket Y (${this.bucketX} | ${this.bucketY})`);
            return { bucketX: this.bucketX, bucketY: this.bucketY };
        }
    }

    private transferWater(fromBucket: string, toBucket: string): { bucketX: number; bucketY: number } {
        const amountToTransfer = Math.min(this.bucketX, this.bucketY - this.bucketX);

        if (fromBucket === 'x') {
            this.steps.push(`Transfer water from X to Y (${this.bucketX} | ${this.bucketY})`);
            return {
                bucketX: this.bucketX - amountToTransfer,
                bucketY: this.bucketY + amountToTransfer,
            };
        } else {
            this.steps.push(`Transfer water from Y to X (${this.bucketX} | ${this.bucketY})`);
            return {
                bucketX: this.bucketX + amountToTransfer,
                bucketY: this.bucketY - amountToTransfer,
            };
        }
    }

    execute(targetX: number, targetY: number, targetZ: number): string[] {
        let currentState = { bucketX: 0, bucketY: 0 };

        currentState = this.fillBucket('x');
        currentState = this.transferWater('x', 'y');
        currentState = this.emptyBucket('y');
        currentState = this.transferWater('x', 'y');
        currentState = this.fillBucket('x');
        currentState = this.transferWater('x', 'y');
        currentState = this.emptyBucket('y');

        if (currentState.bucketX === targetX && currentState.bucketY === targetY) {
            this.steps.push(`Solved (${currentState.bucketX} | ${currentState.bucketY})`);
            return this.steps;
        } else {
            this.steps.push('Cannot be solved with the given target state.');
            return this.steps;
        }
    }
}

export default WaterJugUseCase;
