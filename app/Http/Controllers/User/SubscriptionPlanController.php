<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlans;
use App\Models\UserSubscription;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SubscriptionPlanController extends Controller
{
    public function index()
    {
        $subscriptionplans = SubscriptionPlans::all();
        return Inertia::render('User/SubscriptionPlan/Index', [
            'subscriptionplans' => $subscriptionplans,
        ]);
    }

    public function userSubscript(Request $request, $subscriptionPlan)
    {
        $subscriptionPlan = SubscriptionPlans::findOrFail($subscriptionPlan);

        $data = [
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            'expired_date' => Carbon::now()->addMonths($subscriptionPlan->active_period_in_months),
            'payment_status' => 'success1'
        ];
        $userSubscription = UserSubscription::create($data);

        return redirect(route('user.dashboard.index'));
    }
}
