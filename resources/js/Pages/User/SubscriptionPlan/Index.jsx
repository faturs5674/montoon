import Authenticated from "@/Layouts/Authenticated/Index";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { router } from "@inertiajs/react";

export default function SubscriptionPlan({ auth, subscriptionplans }) {
    const selectSubscription = (id) => {
        router.post(
            route("user.dashboard.subscriptionPlan.userSubscript", {
                subScriptionPlan: id,
            })
        );
    };
    return (
        <Authenticated auth={auth}>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                <div className="flex justify-center gap-10 mt-[70px]">
                    {subscriptionplans.map((subscriptionplan) => {
                        return (
                            <SubscriptionCard
                                name={subscriptionplan.name}
                                price={subscriptionplan.price}
                                durationInMonth={
                                    subscriptionplan.active_period_in_months
                                }
                                features={JSON.parse(subscriptionplan.features)}
                                isPremium={subscriptionplan.name === "Premium"}
                                key={subscriptionplan.id}
                                onSelectSubcription={() =>
                                    selectSubscription(subscriptionplan.id)
                                }
                            />
                        );
                    })}
                </div>
            </div>
        </Authenticated>
    );
}
