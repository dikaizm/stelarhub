<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('/insider/register', [RegisteredUserController::class, 'create'])
                ->name('register');

    Route::post('/insider/register', [RegisteredUserController::class, 'store']);

    Route::get('/insider/login', [AuthenticatedSessionController::class, 'create'])
                ->name('login');

    Route::post('/insider/login', [AuthenticatedSessionController::class, 'store']);

    Route::get('/insider/forgot-password', [PasswordResetLinkController::class, 'create'])
                ->name('password.request');

    Route::post('/insider/forgot-password', [PasswordResetLinkController::class, 'store'])
                ->name('password.email');

    Route::get('/insider/reset-password/{token}', [NewPasswordController::class, 'create'])
                ->name('password.reset');

    Route::post('/insider/reset-password', [NewPasswordController::class, 'store'])
                ->name('password.store');
});

Route::middleware('auth')->group(function () {
    Route::get('/insider/verify-email', EmailVerificationPromptController::class)
                ->name('verification.notice');

    Route::get('/insider/verify-email/{id}/{hash}', VerifyEmailController::class)
                ->middleware(['signed', 'throttle:6,1'])
                ->name('verification.verify');

    Route::post('/insider/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
                ->middleware('throttle:6,1')
                ->name('verification.send');

    Route::get('/insider/confirm-password', [ConfirmablePasswordController::class, 'show'])
                ->name('password.confirm');

    Route::post('/insider/confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::put('/insider/password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('/insider/logout', [AuthenticatedSessionController::class, 'destroy'])
                ->name('logout');
});
