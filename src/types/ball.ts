import { Vec3, Color } from "cc";

interface BallController {
    aimWidget: {
        aimAmplitudeMultiplier: number;
        aimArrowColors: Color[];
        gravity: number;
        isInvisible: boolean;
        minForce: number;
        isPowerShot: boolean;
        isReversiball: boolean;
        isZany: boolean;
        reverse: boolean;
        sinAmplitude: number;
        sinFrequency: number;
        spinAimDirection: boolean;
        teleportMode: boolean;

        SetZany(zany: boolean): void;
        SetPowerShot(powerShot: boolean): void;
        SetReversiball(reversiball: boolean): void;
        SetInvisible(invisible: boolean): void;
        addAmplitudeMultiplier(multiplier: number): void;
        addVerticleMultiplier(multiplier: number): void;
        addGravityMultiplier(multiplier: number): void;
        GetPower(): number;
        EndAim(): void;
        GetPowerScalar(): number;
        GetEndPosition(): Vec3;

        StartAim(): void;

    };

    fallHitThreshold: number;
    cameraZoomOutSpeed: number;
    cameraZoomOutThreshold: number;

    endPosition: Vec3;
    inHole: boolean;
    maxForce: number;
    maxSpeed: number;

    InAir: boolean;
    _isAiming: boolean;
    animating: boolean;

}

export { BallController };