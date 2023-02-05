<script>
	export let title;
	export let x;
	export let y;
</script>

<div
	class="text-xxs font-warownia text-tbeige bg-tgray rounded-md py-2 px-3 absolute capitalize"
	style="
		top: {y + 10}px;
		left: {x + 15}px;"
>
	{title}
</div>
