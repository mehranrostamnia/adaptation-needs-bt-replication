# Summary of the Semi-Structured Interviews

## Purpose and scope

This file summarizes six semi-structured interviews conducted to validate the findings of the study on adaptation needs in robotic systems and the suitability of Behavior Tree (BT)-based techniques for addressing them. The interviews complemented the practitioner questionnaire by providing explanations, examples, and qualifications that could not be captured through closed-ended survey responses.

The interviews focused on three topics:

1. the relevance and interdependence of knowledge-, perception-, actuation-, system-, mission-, and environment-related adaptation needs;
2. the extent to which classical BTs can address these needs; and
3. the suitability and limitations of BT Evolution, BT Extension, BT Generation, and BT Refinement.

Participants are identified only as `I1`–`I6`. This public summary intentionally excludes names and other direct identifiers. The original transcripts should be shared only when permitted by the study's consent and data-management procedures.

## Interview sample

The six participants represented complementary academic and industrial perspectives. Their experience included BT development and deployment, mobile robots, manipulation, task and mission management, humanoid and legged robots, industrial robotics, perception and learning, and safety-related applications. Several participants had experience with both research prototypes and production robotic systems.

| Interview | Broad perspective represented |
|---|---|
| I1 | Industrial BT tooling, large production BTs, and deployments involving multiple robot types |
| I2 | ROS 2 mobile-robot task and mission management |
| I3 | BT adaptation in research conducted with industrial stakeholders |
| I4 | BT design, mobile manipulation, learning, and perception-assisted conditions |
| I5 | Long-term academic and industrial experience across manipulation, humanoid, and legged robots |
| I6 | BT theory and practice, planning, perception, learning, and robot-control architectures |

## Cross-cutting findings

### 1. Classical BTs are execution and orchestration mechanisms

The interviews consistently positioned classical BTs at the execution layer. Their principal strength is coordinating actions, checking conditions, selecting recovery branches, and reacting to observable changes. They do not, by themselves, acquire knowledge, estimate uncertain states, repair perception algorithms, reinterpret ambiguous goals, or decide how to adapt in an unforeseen situation.

I1 described the role of the execution layer as follows:

> *“The execution layer is where the robot, at a high level, decides what to do next, and this usually is the orchestration of multiple elements in the system.”*

I6 made the boundary with other components explicit:

> *“The state estimate and its update should be handled by another model; this is not something that you do with a BT. You use the BT as an orchestrator of actions.”*

Accordingly, classical BTs are effective when an adaptation need and its corresponding response can be anticipated, observed, and encoded through conditions and alternative branches. They are insufficient when the system must discover an unknown condition, infer a new objective, learn a new capability, or synthesize a response that was not represented in the tree.

### 2. Observability determines whether a BT can react

Several participants distinguished between detecting an adaptation need and reacting to it. A BT can select an alternative behavior only after another component, or a condition node connected to that component, exposes the relevant state. For example, a BT may react to a low-confidence perception result, but the perception system must estimate that confidence. Similarly, the BT may initiate a recovery after a component failure, but monitoring or middleware must first detect and report the failure.

I1 summarized this separation:

> *“The execution layer needs to be able to observe an abnormal state and then take actions, but it is not responsible for addressing it or compensating for it.”*

The same participant considered an observable instance of knowledge drift addressable through a BT, while stressing that the system first needs sufficient introspection to recognize that the drift has occurred.

### 3. Adaptation needs are interdependent

The interviews showed that adaptation needs rarely occur in isolation. Environmental changes may alter sensor observations; perception uncertainty may affect the robot's knowledge; incorrect or incomplete knowledge may change action selection; and actuation or component failures may prevent mission completion. Consequently, a single event may cross several adaptation families and require coordinated responses at multiple architectural layers.

I2 described a mobile-robot architecture that could:

> *“adapt based on perception through that whole chain and also react to the environment.”*

This interdependence explains why participants often resisted selecting a single mechanism for an entire adaptation family. Depending on the cause and architectural level, the response may require changes to a sensor or controller, a software component, a BT node, a subtree, or a higher-level planner.

### 4. Suitability is application- and architecture-dependent

Participants repeatedly stated that the relevance of an adaptation need and the suitability of a response depend on the application, the abstraction level assigned to the BT, the available modules, and the safety constraints. The same sensor problem may be addressed by improving the perception module, changing the implementation of a condition node, or adding a BT recovery branch. Likewise, a simple industrial robot may stop after a fault, whereas a mobile or legged robot may need to reason about whether it can safely return to a charging station.

I3 explained this contextual dependence:

> *“I cannot pick only one and tell you: always, when you have a perception error, do this. It all depends on the situation you are in and the factors around you.”*

I5 also observed that industrial systems often prefer conservative, predefined responses because safety and reliability constraints limit the recovery actions that can be attempted online.

### 5. Hybrid architectures are necessary

The participants generally supported an architecture in which BTs remain the behavioral backbone while other mechanisms provide monitoring, perception, state estimation, knowledge management, planning, learning, and safety assurance. In this architecture, external components detect or interpret the adaptation need, whereas the BT coordinates the execution of the selected response. When a genuinely new behavior is needed, an external mechanism may generate, evolve, or refine the BT before it is executed.

## Findings by adaptation family

### Knowledge-related needs

BTs can react to knowledge inaccuracies or drift once these changes are made observable through conditions, blackboards, knowledge bases, or monitoring components. However, participants generally placed knowledge acquisition, state estimation, abstraction, belief updating, and reasoning outside the classical BT formalism. The BT consumes the resulting information and selects behavior accordingly.

### Perception- and actuation-related needs

This family produced the clearest architectural separation. Perception algorithms, sensor-fusion modules, controllers, and hardware interfaces are responsible for improving sensing and actuation. A BT can coordinate perception actions, react to an “object not found” event, select an alternative sensor, retry an action, or execute a fallback, but it does not itself improve the underlying perception or control capability.

### System-related needs

BTs can encode responses to observable component failures, resource constraints, battery levels, and action failures. More substantial adaptations—such as replacing components, changing middleware configurations, adding resources, or modifying the software architecture—require mechanisms outside the BT. Participants also emphasized that industrial safety constraints often favor stopping or restarting a system over attempting unverified online reconfiguration.

### Mission-related needs

BTs are well suited to organizing and executing a sufficiently specified mission. However, an incomplete or ambiguous mission is an input problem rather than an execution event. Planning, reasoning, human interaction, or learning must first clarify or construct the mission. The resulting tasks can then be encoded in, or generated as, a BT.

I1 expressed this distinction directly:

> *“If the mission is incomplete, that is an input, not an output. It is a precondition that needs to be met to have a correct definition of the mission.”*

### Environment-related needs

Environmental changes are a natural application of BT reactivity when the relevant context is observable and a corresponding branch has been encoded. BTs can switch behaviors in response to changed conditions, people, other robots, obstacles, or failed assumptions. However, perception and reasoning components are still needed to recognize and interpret complex environmental changes.

I6 summarized both the strength and limitation of this reactivity:

> *“The whole point of BTs is to have reactive behaviors. It works really well when you have a human or an external agent disrupting your plan, because you can react quickly with a BT—but only if you have a branch for it.”*

## Findings by BT-based technique

### BT Evolution

Participants viewed Evolution as useful for searching for improved BT structures, optimizing parameters, and incorporating objectives such as resource use or battery consumption into a fitness function. Its main limitations concern computation, fitness-function design, verification, and safety. Evolutionary search relies on repeated evaluation and trial and error, which makes unrestricted online evolution unsuitable for rapid operational failures or safety-critical physical systems. Participants therefore primarily associated Evolution with offline design-time optimization or carefully constrained online settings.

I6 highlighted the physical-world limitation:

> *“When you do reinforcement learning, the robot needs to try things. Online, in the real world, this is dangerous. In the real environment, you cannot really undo all the actions.”*

### BT Extension

Participants regarded Extension as a means of enriching BT syntax or execution semantics—for example, by adding decorators, temporal behavior, probabilistic constructs, memory, preconditions, postconditions, or specialized control nodes. Extensions can improve expressiveness and make complex execution logic easier to represent. However, they do not automatically provide perception, knowledge acquisition, planning, learning, or architectural adaptation. Several participants therefore treated Extension as an execution-level capability rather than a complete adaptation framework.

I6 described many extensions as abstractions over existing constructs:

> *“You can do pretty much everything with Parallel, Fallback, and Sequence. The other constructs can be implemented with the classical nodes; they are probably syntactic sugar.”*

### BT Generation

Generation was considered appropriate when the adaptation objective is to synthesize a new executable behavior, especially from a mission specification, planner, demonstration, learned policy, or natural-language instruction. For most other adaptation needs, participants distinguished the mechanism that decides how to adapt from the mechanism that generates the BT. A planner, learner, knowledge base, or language model first determines the new behavior; the generated BT is the executable result.

I6 explained this relationship for uncertain missions:

> *“If the mission is uncertain, you need a learning or planning module that provides the BT as a result.”*

### BT Refinement

Refinement was viewed as the most incremental technique. It starts from an existing BT and modifies parameters, conditions, recovery strategies, actions, or subtrees to repair or improve execution. Participants considered it broadly useful when the original mission and overall intent remain valid. Its limitations arise when the robot must acquire new knowledge or perception capabilities, or when the mission and domain assumptions change so substantially that incremental modification is no longer appropriate.

I5 described the incremental character of Refinement:

> *“Refinement is a proper use of the BT. You start with the tree and then extend and enrich its leaves when you realize that you need more things.”*

## Per-interview summaries

### I1

I1 characterized BTs as execution-layer orchestrators and emphasized the importance of separating execution from perception, state estimation, and mission specification. Observable knowledge drift and component failures can trigger BT recovery, but the BT must be supplied with the relevant state. The participant also highlighted the complexity of production BTs, where numerous fallbacks for sensor, battery, alignment, and manipulation failures can make trees difficult to understand and maintain. The interview strongly supported combining BTs with additional reasoning mechanisms rather than treating them as a complete adaptation solution.

### I2

I2 discussed a ROS 2 mobile-robot task-management architecture organized into mission and skill layers. BTs coordinated actions, reacted to perception results, and propagated action or detection failures to the mission level. The participant's experience involved relatively deterministic, predefined missions, for which classical BT control structures were generally adequate. More complex behavior verification, learning from previous failures, or automatically changing the execution pipeline would require additional mechanisms.

### I3

I3 emphasized that the appropriate adaptation strategy depends on the concrete situation and on which parts of the system can be modified. A perception error could require modifying a sensor module, changing low-level node code, or adding a fallback to the BT. The participant therefore favored combined strategies rather than assigning an entire adaptation family to one mechanism. The interview also identified a practical gap in accessible tools that enable non-specialists to use planning, backchaining, and learning techniques with BTs.

### I4

I4 emphasized abstraction and granularity: whether an adaptation concern belongs in the BT depends on how much of the robotic architecture the BT explicitly represents. Knowledge correction and sensor fusion were generally placed in underlying modules, although their outputs may be exposed through BT conditions. The participant viewed integration with planning, language models, and learning as beneficial. For Evolution, the key limitations were defining suitable fitness functions, constructing representative simulation environments, computational cost, and scaling to radical changes. The interview also highlighted failure recovery, task resumption, the reliability of perception-based conditions, and knowledge sharing between BT nodes.

### I5

I5 viewed BTs as one component within a wider robotic ecosystem. Perception and actuation were treated mainly as subsystems whose events can be coordinated by a BT. The participant described mission- and system-level BT use in both academia and industry, noting that industrial applications often adopt conservative recovery strategies because of safety and reliability requirements. Generation was associated with cognitive architectures, Extension with practical but potentially ad hoc semantic additions, and Refinement with the incremental development of an existing BT.

### I6

I6 distinguished BT orchestration from belief-state estimation, perception, planning, and learning. BTs can coordinate perception actions and react to context changes, people, or other agents, but only when the corresponding conditions and branches exist. Sensor redundancy and failure handling primarily belong to the perception architecture. The participant considered unrestricted online evolutionary learning unsafe in physical systems, described many BT extensions as syntactic convenience, characterized generated BTs as outputs of planning or learning, and viewed refinement as appropriate for improving an existing behavior without replacing its fundamental goal.

## Overall conclusion

The interviews support the conclusion that classical BTs provide a readable, modular, and reactive structure for coordinating robotic behavior, but they are not a complete adaptation mechanism. Their effectiveness depends on whether adaptation needs are observable and whether suitable responses were anticipated and encoded. Enhanced BT techniques broaden the available execution and transformation mechanisms, but they continue to depend on external components for perception, monitoring, reasoning, learning, planning, and safety assurance.

Adaptive robotic behavior is therefore best supported by hybrid architectures in which BTs organize and execute behavior while complementary mechanisms detect adaptation needs, determine suitable responses, and verify that the resulting behavior remains safe, explainable, maintainable, and aligned with mission and quality requirements.

## Notes on interpretation and quotation

- The transcripts were automatically generated and contained recognition and punctuation errors.
- The excerpts in this summary were lightly edited for grammar and readability without changing their intended meaning. Omissions and clarifying additions should be marked with ellipses or square brackets when the excerpts are reused verbatim in publications.
- The excerpts are illustrative rather than exhaustive and should not be interpreted as indicating how many participants supported a theme. Questionnaire statistics should be used for quantitative claims.
- This file is an analytical summary, not a substitute for the original transcripts or a complete qualitative codebook.
- Before publishing verbatim quotations, the wording should be checked against the interview recordings whenever available.

