<!--
 Copyright 2021 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->

<template>
    <!-- <div class="expand-control" tabindex="0" role="button"> -->
    <div class="expand-control" tabindex="0" role="button"></div>
        <span class="material-icons collapser" aria-hidden="true" translate="no">keyboard_arrow_up</span>
        <h4 class="showalways" id="i-don’t-see-a-chapter-near-me,-but-i-am-still-interested-in-joining-gdg.-what-can-i-do" data-text="I don’t see a chapter near me, but I am still interested in       joining GDG. What can I do? ">I don’t see a chapter near me, but I am still interested in
            joining GDG. What can I do? </h4>
    </div>
    <div class="launchpad-faq__body">
        <p>If a nearby chapter doesn’t exist, you can apply to create new GDG chapter in your
        city. <a href="https://gdg.advocu.com/home/applications">Submit an application
        today</a> to lead one in your area. See what it takes to be an organizer at <a href="/community/gdg/organizers">Google Developer Groups Organizers</a>.</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";

import UIModule from "@/store/ui";

@Component({
  components: {},
})
export default class ProgressBar extends Vue {
  public uiModule = getModule(UIModule, this.$store);

  get loading() {
    return this.uiModule.loading;
  }
}
</script>

<style scoped lang="postcss"></style>
