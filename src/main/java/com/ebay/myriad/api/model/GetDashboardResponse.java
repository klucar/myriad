/**
 * Copyright 2012-2014 eBay Software Foundation, All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package com.ebay.myriad.api.model;

import com.ebay.myriad.configuration.MyriadConfiguration;
import com.ebay.myriad.state.Cluster;
import com.ebay.myriad.state.NodeTask;
import com.ebay.myriad.state.SchedulerState;
import org.apache.mesos.Protos;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Collection;
import java.util.Collections;
import java.util.Set;
import java.util.TreeSet;

public class GetDashboardResponse {
    private SchedulerState schedulerState;

    public GetDashboardResponse() {
        super();
    }

    public GetDashboardResponse(SchedulerState schedulerState) {
        this.schedulerState = schedulerState;
    }

    @JsonProperty("pending")
    public Collection<String> getPendingTasks() {
        Set<String> taskIds = new TreeSet<String>();
        for( Protos.TaskID taskId: this.schedulerState.getPendingTaskIds() ){
            taskIds.add(taskId.getValue());
        }
        return taskIds;
    }

    @JsonProperty("staging")
    public Collection<String> getStagingTasks() {
        Set<String> taskIds = new TreeSet<String>();
        for( Protos.TaskID taskId: this.schedulerState.getStagingTaskIds()){
            taskIds.add(taskId.getValue());
        }
        return taskIds;
    }

    @JsonProperty("killable")
    public Collection<String> getKillableTasks() {
        Set<String> taskIds = new TreeSet<String>();
        for( Protos.TaskID taskId : this.schedulerState.getKillableTasks() ){
            taskIds.add(taskId.getValue());
        }
        return taskIds;
    }

    @JsonProperty("active")
    public Collection<NodeTask> getActiveTasks() {
        return this.schedulerState.getActiveTasks();
    }

    // TODO does this really belong here?
    // Not sure where collection of Clusters is and Cluster
    // class generates no Json
    @JsonProperty("clusters")
    public Collection<Cluster> getClusters() {
        return Collections.EMPTY_LIST;
    }

}
