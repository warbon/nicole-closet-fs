<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public static $rules = [
        'name' => 'required|string|max:255',
        'email' => 'required|email|max:255|unique:users',
        'password' => 'required|string|min:6|confirmed',
    ];

    public function oAuthAcessToken(){
        return $this->hasMany(OauthAccessToken::class);
    }

    public static function users()
    {
        return self::get();
    }

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('M j Y h:i:s A');
    }

    public function getUpdatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('M j Y h:i:s A');
    }

    public function getEmailVerifiedAtAttribute($value)
    {
        return Carbon::parse($value)->format('M j Y h:i:s A');
    }

    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = Hash::make($value);
    }
}
